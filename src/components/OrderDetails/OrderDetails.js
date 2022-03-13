import React, { useEffect } from 'react'
import {formatter} from "../../utils/formatter"
import emailjs from "emailjs-com"



function sendEmail(templateParams) {
  
    emailjs.send('gmail','template_rkv3yna', templateParams, 'F8tVfC3TYAOHmBDpL')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}



function OrderDetails({orderDetails}) {

    const items = orderDetails.items;
    const contactInfo = orderDetails.buyer;

    useEffect(() => {
        var templateParams = {
            subject: 'Recibo de CazuStore',
            name: 'Hola ' + contactInfo.name + '!',
            email: 'Hemos recibido tu pedido, recibiras tu pedido en un plazo de 7 dias. ',
            message: 'Tu numero de orden: ' + orderDetails.orderID
        };
        sendEmail(templateParams) // eslint-disable-next-line
    },[])


    return (

            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card" style={{ borderRadius: '10px' }}>
                            <div className="card-header px-4 py-5">
                                <h5 className="text-muted mb-0">Gracias por tu compra, <span style={{ color: '#a8729a' }}>{contactInfo.name}</span>!</h5>
                            </div>
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0" style={{ color: '#a8729a' }}>Recibo de la orden</p>
                                    <p className="small text-muted mb-0">Recibo : {orderDetails.orderID}</p>
                                </div>
                                {items.map((item, index) => (
                                    <div key={index}  className="card shadow-0 border mb-4">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img src={item.image1} className="img-fluid" alt="Phone" />
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0">{item.name}</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">{item.option.text}</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Nota: ----</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Cantidad: {item.quantity}</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">{formatter.format(item.final_price)}</p>
                                                </div>
                                            </div>
                                            <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />
                                            <div className="row d-flex align-items-center">
                                                <div className="col-md-2">
                                                    <p className="text-muted mb-0 small">Pago procesado</p>
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="progress" style={{ height: '6px', borderRadius: '16px' }}>
                                                        <div className="progress-bar" role="progressbar" style={{ width: '5%', borderRadius: '16px', backgroundColor: '#a8729a' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <div className="d-flex justify-content-around mb-1">
                                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">Enviado</p>
                                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">Recibido</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                                
                                <div className="d-flex justify-content-between pt-2">
                                    <p className="fw-bold mb-0">Detalles de tu orden</p>
                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span> {formatter.format(orderDetails.total - 40)}</p>
                                </div>
                                <div className="d-flex justify-content-between pt-2">
                                    <p className="text-muted mb-0">Numero de recibo: 788152</p>
                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Descuento</span> {formatter.format(0)}</p>
                                </div>
                                <div className="d-flex justify-content-between mb-5">
                                    <p className="text-muted mb-0">Voucher : {orderDetails.orderID}</p>
                                    <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery </span> {formatter.format(40)}</p>
                                </div>
                                
                            </div>
                            <div className="card-footer border-0 px-4 py-5" style={{ backgroundColor: '#a8729a', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total pagado: <span className="h2 mb-0 ms-2">{formatter.format(orderDetails.total)}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    )
}

export default OrderDetails