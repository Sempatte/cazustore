import React from 'react'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { useEffect, useState } from 'react'
import { getByCategory, getByBrand, getProductsDatabase } from '../../api'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);

    const {categoryName} = useParams()
    const {brandName} = useParams()


    useEffect(() => {
        if (categoryName === undefined && brandName === undefined) {
            getProductsDatabase().then((querysnapshot) => {
                setLoader(false);

                setProducts(querysnapshot.docs.map(doc => doc.data()));
            }).catch((err) =>{
                console.log(err);
            })
        } else {
            if (categoryName !== undefined){
                getByCategory(categoryName).then((products) => {
                    setLoader(false);
                    setProducts(products);
                }).catch((err) =>{
                    console.log(err);
                })
            } else if (brandName !== undefined){
                getByBrand(brandName).then((products) => {
                    setLoader(false);
                    setProducts(products);
                }).catch((err) =>{
                    console.log(err);
                })
            }
   
        }
        

        
    },[categoryName, brandName])

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