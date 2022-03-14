import React from 'react'
import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductDatabase } from '../../api'
import { Loader } from '../Loader/Loader.js'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoader] = useState(true)
    const [productExists, setProductsExists] = useState()
    const { productId } = useParams()


    useEffect(() => {
        if (productId !== undefined) {
            getProductDatabase(productId).then((doc) => {
                if (!doc.exists) {                 
                    setLoader(false);   
                    setProductsExists(false)
                } else {
                    doc = { ...doc.data()}          
                    setLoader(false);
                    setProductsExists(true)   
                    setProduct(doc);
                }

            }).catch((err) => {
                console.log(err)
            });
        } 
        // eslint-disable-next-line
    }, [productId])

    return (
        <>
            
            {loading ? <Loader /> : null}
            {loading ? null :
                <div className="container pt-5">
                    {productExists ? <ItemDetail {...product} /> : (
                        <h2>No existe el producto.</h2>
                    ) }
                    
                </div>
            }

        </>

    )
}

export default ItemDetailContainer