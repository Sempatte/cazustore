import React from 'react'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { useEffect, useState } from 'react'
import { getProducts, getByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);

    const {categoryName} = useParams()


    useEffect(() => {
        if (categoryName === undefined) {
            getProducts().then((products) => {
                setLoader(false);
                setProducts(products);
            }).catch((err) =>{
                console.log(err);
            })
        } else {
            getByCategory(categoryName).then((products) => {
                setLoader(false);
                setProducts(products);
            }).catch((err) =>{
                console.log(err);
            })
        }
        
    },[categoryName])

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