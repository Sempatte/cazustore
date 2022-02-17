import React from 'react'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncmock'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getProducts().then((products) => {
            setLoader(false);
            setProducts(products);
        }).catch((err) =>{
            console.log(err);
        })
    },[])

    return(
        <>
            
            <div className="container pt-5"> {/* Container Productos */}
            {loader ? <Loader /> : null }
                <div className="row">
                        
                        <ItemList products={products} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;