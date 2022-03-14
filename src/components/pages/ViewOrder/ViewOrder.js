import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import { Loader } from '../../Loader/Loader.js'
import { getOrderDetails } from '../../../api'
import OrderDetails from "../../OrderDetails/OrderDetails";
import { useNotificationServices } from '../../../services/Notification/Notification'

export const ViewOrder = () => {
    const [order, setOrder] = useState({})
    const [loading, setLoader] = useState(true)
    const [orderExists, setOrderExists] = useState()
    const { orderID } = useParams()
    const setNotification = useNotificationServices()

    useEffect(() => {
        if (orderID !== undefined) {
            getOrderDetails(orderID).then((doc) => {
                if (!doc.exists) {    
                    setLoader(false);
                    setOrderExists(false)
                    setNotification('error', 'La orden no existe.')
                } else {
                    doc = { ...doc.data()}
                    console.log(doc)
                    setOrder(doc);
                    setLoader(false);
                    setOrderExists(true)
                    
                }

            }).catch((err) => {
                setOrderExists(false)
                setNotification('error', err)
            });
        } else {
            setOrderExists(false)
            setNotification('error', 'Especifique un numero de orden.')
        }
        // eslint-disable-next-line
    }, []) 

    return (
        <>
        {loading ? <Loader /> : null}
            {loading ? null :
                <div className="container pt-5">
                    {orderExists ? <OrderDetails orderDetails={order} /> : (
                        <h2>No existe la orden.</h2>
                    ) }
                    
                </div>
            }
        </>
    )
}
