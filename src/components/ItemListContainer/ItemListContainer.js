import React from 'react'
import { ItemList } from '../ItemList/ItemList.js'
import { Spinner } from '../Spinner/Spinner.js'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncmock'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        getProducts().then((products) => {
            setSpinner(false);
            setProducts(products);
        })
    },[])
    console.log("P", products)

    return(
        <>
            
            <div className="container pt-5"> {/* Container Productos */}
            {spinner ? <Spinner /> : null }
                <div className="row">
                        
                        <ItemList products={products} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;