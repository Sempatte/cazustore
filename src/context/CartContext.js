import React from 'react';
import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
    let st = undefined;

    localStorage.getItem('cart') === null ? st = [] : st = JSON.parse(localStorage.getItem('cart')) // Consulta si el carrito existe en el LocalStorage, caso contrario devuelve un []

    const [cart, setCart] = useState(st)
    console.log(cart)


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
        console.log(total)
        return total
    }

    const addItem = (productToAdd, quantity) => {

        const newObj = {
            ...productToAdd,
            quantity,
            total: productToAdd.final_price * quantity,
        }

        if (isInCart(productToAdd.id)) {
            return false // FALSE: Esta en el carrito
        }
        let sCart = [...cart, newObj]
        setCart(sCart)
        localStorage.setItem('cart', JSON.stringify(sCart)) //Agrega al LocalStorage el carrito

        return true // TRUE: No esta en el carrito

    }

    const isInCart = (id) => {
        console.log(cart.some(p => p.id === id))
        return cart.some(p => p.id === id)
    }

    const clearCart = () => { // Borra todo el carrito
        localStorage.removeItem('cart');
        console.log("carro borrado.")
        setCart([])
    }

    const removeItem = (id) => {
        const newCart = cart.filter(p => p.id !== id)
        setCart(newCart)
        console.log("nuevo carro: ", newCart)
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