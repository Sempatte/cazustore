import React from 'react';
import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
    let st = undefined;

    localStorage.getItem('cart') === null ? st = [] : st = JSON.parse(localStorage.getItem('cart')) // Consulta si el carrito existe en el LocalStorage, caso contrario devuelve un []

    const [cart, setCart] = useState(st)


    const getLenghtCart = () => {
        return cart.length
    }

    function amount(item) {
        return item.total;
    }

    function sum(prev, next) {
        return prev + next;
    }



    const getTotal = () => {
        let total = cart.map(amount).reduce(sum, 0);
        return total
    }

    const addItem = (productToAdd, quantity) => {

        const newObj = {
            ...productToAdd,
            quantity,
            total: productToAdd.final_price * quantity,
        }

        if (isInCart(productToAdd.id, productToAdd.option.value)) {
            return false // FALSE: Esta en el carrito
        }
        let sCart = [...cart, newObj]
        setCart(sCart)
        localStorage.setItem('cart', JSON.stringify(sCart)) //Agrega al LocalStorage el carrito

        return true // TRUE: No esta en el carrito

    }

    const isInCart = (id, optionValue) => {
        return cart.some(p => p.id === id && p.option.value === optionValue)
    }

    const clearCart = () => { // Borra todo el carrito
        localStorage.removeItem('cart');
        setCart([])
    }

    const removeItem = (id, oValue) => {
        const newCart = cart.filter(p => p.id !== id || p.option.value !== oValue)
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }


    return (
        <Context.Provider value={{
            cart,
            addItem,
            getLenghtCart,
            clearCart,
            removeItem,
            getTotal,
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;