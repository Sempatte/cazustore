import React, { useState, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount';
import Select from '../Select/Select';
import './ItemDetail.css'
import { Link } from "react-router-dom";
import Logo from '../../Logo.png'
import{ Toast, ToastContainer}  from "react-bootstrap";
import CartContext from '../../context/CartContext'


const ItemDetail = ({ id,name,category,options,brand,description,color,initial_price,final_price,hot,stock,image1,image2 }) => {
    const [counter, setCounter] = useState(0);

    const { addItem } = useContext(CartContext)
    const [option, setOption] = useState();
    const [toastBody, setToastBody] = useState();
    const [show, setShow] = useState(false);

    

    
    const toggleShow = () => setShow(!show);
    
    const optionSelected = (value) => {
        setOption(value)
    }


    const onAdd = quantity => {
    
        
        const productToAdd = {
            id,
            name,
            initial_price,
            final_price,
            image1,
            color,
            brand,
            category,
            description,
        }

        if (addItem(productToAdd, quantity)) {
            setCounter(quantity)
            setToastBody(`Se agregaron ${quantity} articulos al carrito`)
            toggleShow();
        } else {
            setToastBody(`El producto ya se encuentra en tu carrito.`)
            toggleShow();
        }

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
                            <div> <img className="img-big" alt={image1} src={image1} /></div>
                        </div>

                    </article>
                </aside>
                <aside className="col-sm-7">
                    <article className="card-body p-5">
                        <h3 className="title mb-3">                        
                            {name}
                            {hot === true && <span role="img" aria-label="fire">🔥</span>}
                        </h3>
                        <label className="price-detail-wrap">
                            <span className="price h3 text-warning">
                                <div className="price"><span>S/{initial_price}</span> S/{final_price}</div>
                                {/* <span className="currency">S/.</span><span className="num">{final_price}</span> */}
                            </span>
                        </label>
                        <dl className="item-property">

                            <dd>
                                <p>{description}</p>
                            </dd>
                        </dl>

                        <dl className="param param-feature">
                            <dt>Color</dt>
                            <dd>{color}</dd>
                        </dl>
                        <dl className="param param-feature">
                            <dt>Stock</dt>
                            <dd>{stock}</dd>
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
                                <ItemCount  initial={1} stock={stock} onAdd={onAdd} /></>
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
