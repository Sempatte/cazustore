import React, { useContext } from "react";
import CartContext from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import { BsArrowLeftShort, BsFillTrashFill } from "react-icons/bs";
import { confirm } from 'react-bootstrap-confirmation';
import './Cart.css'
import {formatter} from '../../../utils/formatter'

function Cart() {
    const { clearCart, removeItem, getTotal } = useContext(CartContext)
    const cart = JSON.parse(localStorage.getItem('cart'));


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
                                        cart.map((item, index) => (
                                            <div key={index} className="ibox-content">
                                                <div className="table-responsive">
                                                    <table  className="table shoping-cart-table">
                                                        <tbody>
                                                            <tr>
                                                                <td width={120}>
                                                                    <img alt={item.image1} src={item.image1} width="100%" height="100%" />

                                                                </td>
                                                                <td className="desc">
                                                                    <h4>
                                                                        <Link target="_blank" style={{ textDecoration: 'none' }} to={`/item/${item.id}`} className="text-navy">
                                                                            {item.name} 
                                                                        </Link>
                                                                    </h4>
                                                                    <label > {item.option.text}</label>
                                                                    <label className="small">
                                                                        {item.description}
                                                                    </label>

                                                                    <div className="m-t-sm">
                                                                        <button onClick={() => removeItem(item.id, item.option.value)} type="button" className="btn btn-danger btn-sm"><BsFillTrashFill /></button>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {formatter.format(item.final_price)}
                                                                    &nbsp;<s className="small text-muted"> {formatter.format(item.initial_price)}</s>
                                                                </td>
                                                                <td width={65}>
                                                                    <input type="text" className="form-control text-center" disabled value={item.quantity} />
                                                                </td>
                                                                <td>
                                                                    <h5>
                                                                        {formatter.format(item.total)}
                                                                    </h5>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        ))
                                    ) : <h3>No hay productos</h3>

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
                                    <h3 className="font-bold" style={{color: "#34ad52"}}>
                                        {formatter.format(getTotal() + 40)}
                                    </h3>
                                    </>
                                    )}
                                    
                                    <hr />
                                    {getTotal() > 0 && (
                                        <div className="m-t-sm">
                                            <div className="btn-group">
                                                <button onClick={() => alert("Checkout")} className="btn btn-primary btn-sm">Checkout</button>
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
            </div>
        </div>





    )
}

export default Cart