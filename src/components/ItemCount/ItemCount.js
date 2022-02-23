import {useState} from 'react';
import React from 'react';
import './ItemCount.css'

function ItemCount({initial, stock, onAdd}) {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }

    const increment = () => {
        
        if (count >= stock){
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
                    onAdd(count);
                    restartCount();
                }
                } className="add-to-cart">AÑADIR AL CARRITO</button>

            </div>
            

        </>
    );
}

export default ItemCount;
