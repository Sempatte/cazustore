import React, { useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import Select from '../Select/Select';
import './ItemDetail.css'
import { Link } from "react-router-dom";
import Logo from '../../Logo.png'
import{ Toast, ToastContainer}  from "react-bootstrap";

const ItemDetail = ({ product, quantity }) => {
    const [counter, setCounter] = useState(quantity);
    const [option, setOption] = useState();
    const [toastBody, setToastBody] = useState();
    const [show, setShow] = useState(false);
    const options = product.options;
    
    const toggleShow = () => setShow(!show);

    const optionSelected = (value) => {
        setOption(value)
    }

    const onAdd = quantity => {
        console.log(option)
        setCounter(quantity)
        console.log(quantity)
        if (quantity > 1) {
            console.log(`Se agregaron ${quantity} articulos al carrito`);
        } else {
            console.log(`Se agrego ${quantity} articulo al carrito`);
        }
        setToastBody(`Se agregaron ${quantity} articulos al carrito`)
        toggleShow();
    }


    return (
        <>
        {toastBody && (
            <ToastContainer position="top-end" className="p-3">
            <Toast onClose={() => setShow(false)} show={show}  delay={4000} autohide>
                <Toast.Header>
                    <img
                        src={Logo}
                        width="10%"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">CazuStore</strong>

                </Toast.Header>
                <Toast.Body>{toastBody}</Toast.Body>
            </Toast>
        </ToastContainer>
        )}
        
        <div className="card">
            
            <div className="row">
                <aside className="col-sm-5 border-right">
                    <article className="gallery-wrap">
                        <div className="img-big-wrap">
                            <div> <img className="img-big" alt={product.image1} src={product.image1} /></div>
                        </div>

                    </article>
                </aside>
                <aside className="col-sm-7">
                    <article className="card-body p-5">
                        <h3 className="title mb-3">                        
                            {product.name}
                            {product.hot === true && <span role="img" aria-label="fire">🔥</span>}
                        </h3>
                        <label className="price-detail-wrap">
                            <span className="price h3 text-warning">
                                <div className="price"><span>S/{product.initial_price}</span> S/{product.final_price}</div>
                                {/* <span className="currency">S/.</span><span className="num">{product.final_price}</span> */}
                            </span>
                        </label>
                        <dl className="item-property">

                            <dd>
                                <p>{product.description}</p>
                            </dd>
                        </dl>

                        <dl className="param param-feature">
                            <dt>Color</dt>
                            <dd>{product.color}</dd>
                        </dl>
                        <dl className="param param-feature">
                            <dt>Stock</dt>
                            <dd>{product.stock}</dd>
                        </dl>
                        
                        <hr />
                        <div className="row">
                            {counter ? (                             
                                <Link to="/cart"><button className="add-to-cart">IR AL CARRITO</button></Link>                          
                            ) :
                            <>
                            <dl className="param param-feature">
                            <Select options={options} onSelect={optionSelected} defaultOption={1} />
                        </dl>
                                <ItemCount  initial={1} stock={product.stock} onAdd={onAdd} /></>
                            }
                            
                        </div>
                    </article>
                </aside>
            </div>
        </div>
        </>
    )
};

export default ItemDetail;
