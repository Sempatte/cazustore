import React from 'react'
import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProduct } from '../../asyncmock'
import { Loader } from '../Loader/Loader.js'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);

    useEffect(() => {
        getProduct().then(product => {
            setLoader(false);
            setProduct(product);
        });
    }, [])

  return (
    <>
    {loader ? <Loader /> : null }
    {loader ? null : 
      <div className="container pt-5">
        <ItemDetail product={product}/>
      </div>
    }

    </>

  )
}

export default ItemDetailContainer