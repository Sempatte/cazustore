import React from 'react'
import { BsStarFill } from "react-icons/bs";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom'

const Item = ( {product} ) => {
    

    const onAdd = (count) => {

        if (count > 1) {
            alert(`Se agregaron ${count} articulos al carrito`);
        } else {
            alert(`Se agrego ${count} articulo al carrito`);
        }


    }

    var stars = [];
    for (var i = 0; i < product.stars_count; i++) {
        stars.push(<BsStarFill />);
    }
    

    return (
        <div className="col-md-3 col-sm-6">
            <div className="product-grid"> 
                <div className="product-image">
                    <span className="image">
                        <img className="pic-1" alt="laptop1" src={product.image1} />
                        <img className="pic-2" alt="laptop2" src={product.image2} />
                    </span>
                    {product.hot === true && <span className="product-sale-label" ><span role="img" aria-label="fire">🔥</span>  Hot</span>}

                    {/* <span className="product-discount-label">-3%</span> */}
                </div>
                <div className="product-content">
                    <ul className="rating">
                        {stars}
                    </ul>
                    <Link to={`/detail/${product.id}`} className="title">{product.name}</Link> {/*Cuando el usuario clickea en el título, podra ver más detalles acerca del producto.*/}
                    <div className="stock"><span>Stock: {product.stock}</span></div>
                    <div className="price"><span>S/{product.initial_price}</span> S/{product.final_price}</div>
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Item;