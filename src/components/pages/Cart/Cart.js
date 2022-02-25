import React, { useContext, useEffect, useState } from "react";
import CartContext from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import { BsArrowLeftShort, BsFillTrashFill } from "react-icons/bs";
import { confirm } from 'react-bootstrap-confirmation';
import './Cart.css'

function Cart() {
    const { clearCart, removeItem, getTotal } = useContext(CartContext)
    const cart = JSON.parse(localStorage.getItem('cart'));
    const [productsInCart, setProductsInCart] = useState(false);

    const AlertClearCart = async () => {
        const result = await confirm('Seguro que quieres borrar tu carrito?');
        if (result) { clearCart(); setProductsInCart(false) };
    };

    

    const formatter = new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
    });

    useEffect(() => (
        cart === null || cart.length === 0 ? setProductsInCart(false) : setProductsInCart(true)

    ), [])

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
                                    productsInCart ? (
                                        cart.map(item => (
                                            <div className="ibox-content">
                                                <div className="table-responsive">
                                                    <table className="table shoping-cart-table">
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
                                                                    <p className="small">
                                                                        {item.description}
                                                                    </p>

                                                                    <div className="m-t-sm">
                                                                        <button onClick={() => removeItem(item.id)} type="button" className="btn btn-danger btn-sm"><BsFillTrashFill /></button>
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

                                {productsInCart && (
                                    <div className="ibox-content">

                                        <Link to="/products"><button className="btn btn-white"><BsArrowLeftShort />Continuar comprando</button></Link>
                                    </div>
                                )}


                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="ibox">
                                <div className="ibox-title">
                                    <h5>Cart Summary</h5>
                                </div>
                                <div className="ibox-content">
                                    <span>
                                        Total
                                    </span>
                                    <h2 className="font-bold">
                                        {formatter.format(getTotal())}
                                    </h2>
                                    <hr />
                                    {productsInCart === true && (
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


                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}

export default Cart