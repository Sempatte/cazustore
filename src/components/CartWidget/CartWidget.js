import React from 'react';
import { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import {formatter} from '../../utils/formatter'


function CartWidget({ children }) {

    const { getTotal } = useContext(CartContext)
    return (
        <>

                <div className="d-flex flex-row align-items-center justify-content-center">
                    <Link to='/cart'>
                        <span className="shop-bag">
                            <AiOutlineShoppingCart />
                        </span>
                    </Link>
                    <div className="d-flex flex-column ms-2">
                        <span className="qty">{children} producto(s)</span>
                        {children > 0 && <span className="fw-bold">{formatter.format(getTotal())}</span>}
                    </div>
                </div>

        </>
    );
}

export default CartWidget;
