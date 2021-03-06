import React from 'react';
import { createContext } from "react";
import useLocalStorage from '../customHooks/useLocalStorage';

const Context = createContext();

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useLocalStorage('cart', []);

    const getLenghtCart = () => {
        const countArray = cart.map(p => p.quantity);
        
        if(countArray.length){
            return countArray.reduce((acc, count) => acc += count);
        } else {
            return 0;
        }
    }


    const getTotal = () => {
        const countArray = cart.map(p => {
            return p.total
        });
        
        if(countArray.length){
            return countArray.reduce((acc, total) => acc += total);
        } else {
            return 0;
        }
    }

    const addItem = (productToAdd, quantity) => {

        const newObj = {
            ...productToAdd,
            quantity,
            total: productToAdd.final_price * quantity,
        }

        if (isInCart(productToAdd.id, productToAdd.option.value)) {
            return false 
        }
        let sCart = [...cart, newObj]
        setCart(sCart)

        return true

    }

    const isInCart = (id, optionValue) => {
        return cart.some(p => p.id === id && p.option.value === optionValue)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter(p => p.id !== id))
    }

    const removeItemFromCart = (id, oValue) => {
        setCart(cart.filter(p => p.id !== id || p.option.value !== oValue))
    }


    return (
        <Context.Provider value={{
            cart,
            addItem,
            getLenghtCart,
            clearCart,
            removeItem,
            removeItemFromCart,
            getTotal,
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;