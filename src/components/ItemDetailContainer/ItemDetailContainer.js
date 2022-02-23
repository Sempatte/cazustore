import React from 'react'
import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProduct } from '../../asyncmock'
import { Loader } from '../Loader/Loader.js'
import { useNavigate, useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoader] = useState(true)
    const navigate = useNavigate();
    const { productId } = useParams()

    useEffect(() => {
        if (productId !== undefined) {
            getProduct(productId).then(product => {
                if (product === undefined) {
                    navigate('/products');
                } else {
                    setLoader(false);
                    setProduct(product);
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
                    <ItemDetail product={product} />
                </div>
            }

        </>

    )
}

export default ItemDetailContainer