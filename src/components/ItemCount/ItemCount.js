import {useState} from 'react';
import React from 'react';
import { FaRandom } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

function ItemCount(props) {

    const [count, setCount] = useState(props.initial)

    const decrement = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }

    const increment = () => {
        
        if (count >= props.stock){
            alert("No hay más stock")
        } else {
            setCount(count + 1)
        }
    }

    const restartCount = () => {
        setCount(1)
    }

    return (
        <>
            <div className="product-incrementer">
                <button onClick={decrement} type="button" className="btn btn-default">-</button>
                <label className="quantity-field border-0 text-center w-25" >{count}</label>
                <button onClick={increment} type="button" className="btn btn-default">+</button>
            </div>
            <div className="product-button-group">
                <button onClick={() => {
                    props.onAdd(count);
                    restartCount();
                }
                } className="add-to-cart">AÑADIR AL CARRITO</button>
                <span className="product-like-icon" ><BsFillHeartFill /></span>
                <span className="product-compare-icon"><FaRandom /></span>
            </div>
            

        </>
    );
}

export default ItemCount;
