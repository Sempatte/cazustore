import {useState, createContext, useContext} from 'react'
import {VscPass, VscError} from 'react-icons/vsc'


function Notification({severity, message}) {
  if(message === ''){
      return null;
  }  

  return (
    <div className={`notification ${severity}`}> {severity === 'error' ? <VscError/> : <VscPass/>} {message}</div>
  )
}

const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const setNotification = (severity, message) => {
        setMessage(message);
        setSeverity(severity);
        setTimeout(() => {
            setMessage('')
        }, 4000);
    }

    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification severity={severity} message={message}/>
            {children}
        </NotificationContext.Provider>
    )

}

export const useNotificationContext = () => {
   return useContext(NotificationContext);
}