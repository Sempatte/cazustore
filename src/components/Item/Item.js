import React from 'react'
import { BsStarFill } from "react-icons/bs";
import ItemCount from "../ItemCount/ItemCount";


function Item (props) {
    

    const onAdd = (count) => {

        if (count > 1) {
            alert(`Se agregaron ${count} articulos al carrito`);
        } else {
            alert(`Se agrego ${count} articulo al carrito`);
        }


    }

    var stars = [];
    for (var i = 0; i < props.stars_count; i++) {
        stars.push(<BsStarFill />);
    }
    

    return (
        <div className="col-md-3 col-sm-6">
            <div className="product-grid">
                <div className="product-image">
                    <span className="image">
                        <img className="pic-1" alt="laptop1" src={props.img1} />
                        <img className="pic-2" alt="laptop2" src={props.img2} />
                    </span>
                    {props.hot === true ? <span className="product-sale-label" ><span role="img" aria-label="fire">🔥</span>  Hot</span> : null}

                    {/* <span className="product-discount-label">-3%</span> */}
                </div>
                <div className="product-content">
                    <ul className="rating">
                        {stars}
                    </ul>
                    <span className="title">{props.name}</span>
                    <div className="stock"><span>Stock: {props.stock}</span></div>
                    <div className="price"><span>S/{props.initial_price}</span> S/{props.final_price}</div>
                    <ItemCount initial={1} stock={props.stock} onAdd={onAdd}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Item;
