import React from 'react';
import {useState, createContext, useContext} from 'react'
import { Toast, ToastContainer } from "react-bootstrap";
import Logo from '../../Logo.png'


function Notification({severity, message}) {
  if(message === ''){
      return null;
  }  

  return (  
    message && (

        <ToastContainer style={{zIndex:99999}} position="top-end" className="p-3">
            <Toast style={{background: 'white'}}>
                <Toast.Header>
                    <img
                        src={Logo}
                        width="10%"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Alerta</strong>

                </Toast.Header>
                <Toast.Body  style={severity === "success" ? {color: "green"} : {color: "red"} }>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
  )
}

const NotificationContext = createContext()

export const NotificationServicesProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 5000)
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationServices = () => {
    return useContext(NotificationContext)
}