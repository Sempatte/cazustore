import React from 'react'
import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductDatabase } from '../../api'
import { Loader } from '../Loader/Loader.js'
import { useNavigate, useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoader] = useState(true)
    const [productExists, setProductsExists] = useState()
    const navigate = useNavigate();
    const { productId } = useParams()

    useEffect(() => {
        if (productId !== undefined) {
            getProductDatabase(productId).then((doc) => {
                if (!doc.exists) {                 
                    console.log("No existe el item");   
                    setLoader(false);   
                    setProductsExists(false)
                } else {
                    doc = { ...doc.data()}          
                    console.log(doc);
                    setLoader(false);
                    setProductsExists(true)   
                    setProduct(doc);
                }

            }).catch((err) => {
                console.log(err)
            });
        } else {
            navigate('/products');
        }

    }, [productId, navigate])

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