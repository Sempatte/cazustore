import React, { useState, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount';
import Select from '../Select/Select';
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { useNotificationServices } from '../../services/Notification/Notification'
import CartContext from '../../context/CartContext'


const ItemDetail = ({ id, name, category, options, brand, description, color, initial_price, final_price, hot, stock, image1, image2 }) => {
    const [counter, setCounter] = useState(0);

    const { addItem } = useContext(CartContext)
    const [option, setOption] = useState(1);
    const setNotification = useNotificationServices()



    const optionSelected = (value) => {

        setOption(parseInt(value))
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
            option: options[option - 1],
            category,
            description,
        }
        

        if (addItem(productToAdd, quantity)) {
            setCounter(quantity)
            setNotification('success',`Se agrego ${name} al carrito`)

        } else {
            setNotification('error',`El producto ya se encuentra en tu carrito.`)

        }

    }


    return (
        <>

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
                                {stock > 0 ? (
                                    counter ? (
                                        <Link to="/cart"><button className="add-to-cart">Terminar mi compra</button></Link>
                                    ) :
                                        <>
                                            <dl className="param param-feature">
                                                <Select options={options} onSelect={optionSelected} defaultOption={1} />
                                            </dl>
                                            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                                        </>
                                    
                                ) : <h3>Sin stock del producto</h3> 
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
