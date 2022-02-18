import React from 'react'
import {Link} from 'react-router-dom'
import { FaHeart,  FaRandom, FaEye, FaShoppingCart } from "react-icons/fa";
import  './Item.css'

const Item = ( {product} ) => {
    

    /* const onAdd = (count) => {

        if (count > 1) {
            alert(`Se agregaron ${count} articulos al carrito`);
        } else {
            alert(`Se agrego ${count} articulo al carrito`);
        }

    } */


    return (
        <div className="col-md-3 col-sm-6">
            <div className="Item">
                <div className="product-grid">
                    <div className="product-image">
                        <Link to={`/item/${product.id}`} className="image">
                            <img alt="Image1" className="pic-1" src={product.image1} />
                            <img alt="Image2" className="pic-2" src={product.image2} />
                        </Link>
                        {product.hot === true && <span className="product-sale-label" ><span role="img" aria-label="fire">🔥</span></span>}
                        <ul className="product-links">
                            <li><Link to = "#"><FaHeart /></Link></li>
                            <li><Link to = "#"><FaRandom /></Link></li>
                            <li><Link to={`/item/${product.id}`}><FaEye /></Link></li>
                            <li><a onClick={() => {alert("Producto agregado al carrito.")}} ><FaShoppingCart /></a></li>
                            
                        </ul>
                        
                    </div>
                    <div className="product-content">
                        <h3 className="title"><Link to={`/item/${product.id}`} >{product.name}</Link></h3>
                        <div className="price"><span>S/{product.initial_price}</span> S/{product.final_price}</div>
                    </div>
                </div>
            </div>
        </div>

        
        
    )
}

export default Item;