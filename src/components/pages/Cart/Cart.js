import React, { useContext, useState, useRef } from "react";
import CartContext from '../../../context/CartContext';
import CartItem from '../../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";
import { confirm } from 'react-bootstrap-confirmation';
import { writeBatch, getDocs, collection, addDoc, Timestamp, where, query, documentId } from 'firebase/firestore'
import './Cart.css';
import Togglable from '../../Togglable/Togglable';
import { formatter } from '../../../utils/formatter';
import ContactForm from "../../ContactForm/ContactForm";
import { getFirestore } from '../../../services/firebase'
import { useNotificationServices } from '../../../services/Notification/Notification'
import OrderDetails from "../../OrderDetails/OrderDetails";
import { Loader } from '../../Loader/Loader'
import emailjs from "emailjs-com"




function Cart() {

    
    const [processingOrder, setProcessingOrder] = useState(false)
    const [orderFinished, setOrderFinished] = useState(false);
    const [orderDetails, setOrderDetail] = useState()
    const [contact, setContact] = useState({
        name: '',
        surnames: '',
        address: '',
        phone: '',
        email: '',
        comment: ''
    })

    const setNotification = useNotificationServices()
    const { cart, clearCart, getTotal, removeItem } = useContext(CartContext)
    const contactFormRef = useRef()
    const firestoreDb = getFirestore()

    const sendEmail = (templateParams) => {
  
        emailjs.send('gmail','template_rkv3yna', templateParams, process.env.REACT_APP_EMAILJS_UserID)
            .then(function() {
                setNotification(
                    "success",
                    "Los detalles han sido enviados a su correo."
                )
            }, function() {
                setNotification(
                    "error",
                    "Error al enviar correo."
                )
            });
    }

    const confirmOrder = () => {

        if (contact.name !== '' && contact.surnames !== ''
            && contact.address !== '' && contact.phone !== ''
            && contact.email !== '') {

            if (contact.email.includes('@') === false) {
                setProcessingOrder(false)
                setNotification(
                    "error",
                    "Inserte un correo válido."
                )
                return
            }

            setProcessingOrder(true)

            const OrderNum = require('order-id')('key');
            const orderNum = OrderNum.generate();

            const objOrder = {
                buyer: contact,
                items: cart,
                total: getTotal() + 40, //Delivery S/40.00 PEN
                date: Timestamp.fromDate(new Date()),
                orderNum: orderNum,
                orderid: ''
            }

            const batch = writeBatch(firestoreDb)
            const outOfStock = []
            const ids = objOrder.items.map(i => i.id)

            getDocs(query(collection(firestoreDb, 'items'), where(documentId(), 'in', ids)))
                .then(response => {
                    setProcessingOrder(true)
                    response.docs.forEach((docSnapshot) => {
                        if (docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).quantity) {
                            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).quantity })
                        } else {
                            outOfStock.push({ id: docSnapshot.id, ...docSnapshot.data() })
                        }
                    })
                }).then(() => {
                    if (outOfStock.length === 0) {
                        addDoc(collection(firestoreDb, 'orders'), objOrder).then(({ id }) => {
                            batch.commit()        
                            clearCart()  
                            setNotification('success', `La orden se generó exitosamente, su número de orden es: ${id}`)
                            setTimeout(() => {
                                var templateParams = {
                                    to: contact.email,
                                    name: contact.name,
                                    orderNum: orderNum,
                                    fullnames: contact.name + ' ' + contact.surnames,
                                    date: objOrder.date.toDate(),
                                    address: contact.address,
                                    phone: contact.phone,
                                    total: formatter.format(objOrder.total),
                                    orderid: id                                  
                                };
                                sendEmail(templateParams)
                            }, 2000)
                            setProcessingOrder(false)                  
                            setOrderDetail(objOrder)
                            setOrderFinished(true)             
                        })
                    } else {
                        outOfStock.forEach(prod => {
                            setProcessingOrder(false)
                            setNotification('error', `El producto ${prod.name} no tiene stock disponible :(`)
                            removeItem(prod.id)
                        })
                    }
                }).catch((error) => {
                    console.log(error)
                    setNotification('error', error)
                })



        } else {
            setNotification(
                "error",
                "Debe completar los datos de contacto para generar la orden"
            );
        }
    };

    if (orderFinished) {
        return (
            <OrderDetails orderDetails={orderDetails} />
        );
    }

    if (processingOrder) {
        return (<Loader />);
    }


    const AlertClearCart = async () => {
        const result = await confirm('Seguro que quieres borrar tu carrito?');
        if (result) { clearCart() };
    };



    return (
        <div>

            <div className="container py-5">
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="ibox">
                                <div className="ibox-title">
                                    <h5>Tu carrito</h5>
                                </div>
                                {
                                    getTotal() > 0 ? (
                                        cart.map((item, index) => <CartItem key={index} {...item}></CartItem>)
                                    ) : (
                                        <>
                                            <h3>No hay productos</h3>
                                            <Link to="/products">
                                                <button className="btn btn-white">Empiece agregando items haciendo click aquí!</button>
                                            </Link>
                                        </>
                                    )

                                }

                                {getTotal() > 0 && (
                                    <div className="ibox-content">

                                        <Link to="/products"><button className="btn btn-white"><BsArrowLeftShort />Continuar comprando</button></Link>
                                    </div>
                                )}


                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="ibox">
                                <div className="ibox-title">
                                    <h5>Resumen de la compra</h5>
                                </div>
                                <div className="ibox-content">
                                    {getTotal() > 0 && (
                                        <>
                                            <span>
                                                Productos
                                            </span>

                                            <h3 className="font-bold">
                                                {formatter.format(getTotal())}
                                            </h3>
                                            <span>
                                                Envío
                                            </span>
                                            <h4 className="font-bold">
                                                {formatter.format(40)}
                                            </h4>
                                            <span>
                                                Total
                                            </span>
                                            <h3 className="font-bold" style={{ color: "#34ad52" }}>
                                                {formatter.format(getTotal() + 40)}
                                            </h3>
                                        </>
                                    )}

                                    <hr />
                                    {getTotal() > 0 && (
                                        <div className="m-t-sm">
                                            <div className="btn-group">
                                                <button onClick={() => confirmOrder()} className="btn btn-primary btn-sm">Confirmar compra</button>
                                                <button onClick={AlertClearCart}
                                                    href="#" className="btn btn-warning btn-sm"> Borrar carrito</button>

                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>

                            <div className="ibox">
                                <div className="ibox-title">
                                    <h5>Soporte</h5>
                                </div>
                                <div className="ibox-content text-center">
                                    <h3><i className="fa fa-phone"></i> +51 983 314 517</h3>
                                    <span className="small">
                                        Por favor, póngase en contacto con nosotros si tiene alguna pregunta. Estamos disponibles las 24 horas.
                                    </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                {getTotal() > 0 && (
                    <Togglable
                        ref={contactFormRef}>
                        <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                    </Togglable>
                )}
            </div>
        </div>


    )
}

export default Cart