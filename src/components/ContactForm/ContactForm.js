import React, { useState } from 'react'

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [surnames, setSurnames] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()

        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            surnames,
            address,
            phone,
            email,
            comment
        }
        setContact(objContact)
        /* setName('')
        setSurnames('')
        setPhone('')
        setAddress('')
        setComment('')
        setEmail('') */
    }

    return (

        <div className="row ">
            <h3>Ingresa tus datos de compra</h3>
            <div className="col-lg-10 mx-auto">
                <div className="card mt-2 mx-auto p-4 bg-light">
                    <div className="card-body bg-light">
                        <div className="container">
                            <form onSubmit={handleContactForm}>
                                <div className="controls">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_name">Nombres *</label>
                                                <input 
                                                    type="text" 
                                                    value={name} 
                                                    className="form-control" 
                                                    placeholder="Ingresa tu nombres completos *" 
                                                    required="required"
                                                    onChange={({ target }) => setName(target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_lastname">Apellidos *</label>
                                                <input  
                                                    type="text"  
                                                    value={surnames} 
                                                    className="form-control" 
                                                    placeholder="Ingresa tus apellidos *"
                                                    required="required" 
                                                    onChange={({ target }) => setSurnames(target.value)}
                                                 />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group"> <label htmlFor="form_email">Direccion *</label> 
                                                <input  
                                                    type="text"  
                                                    value={address} 
                                                    className="form-control" 
                                                    placeholder="Ingresa tu direccion de compra *" 
                                                    required="required"
                                                    onChange={({ target }) => setAddress(target.value)}
                                                /> 
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group"> <label htmlFor="form_email">Telefono *</label> 
                                                <input 
                                                    type="text"
                                                    value={phone} 
                                                    className="form-control"
                                                    placeholder="Ingresa tu direccion de compra *"
                                                    required="required"
                                                    onChange={({ target }) => setPhone(target.value)}
                                                    /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group"> <label htmlFor="form_email">Email *</label> 
                                                <input 
                                                    type="email"
                                                    value={email} 
                                                    className="form-control"
                                                    placeholder="Ingresa tu correo *"
                                                    required="required"
                                                    onChange={({ target }) => setEmail(target.value)}
                                                /> 
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row py-5">
                                        <div className="col-md-12">
                                            <div className="form-group"> 
                                                <label htmlFor="form_message">Comentario adicional</label> 
                                                <textarea
                                                    value={comment}           
                                                    className="form-control"
                                                    placeholder="Por favor, si tienes algun comentario adicional respecto a tu compra, detallalo aqui."
                                                    rows={2}
                                                    onChange={({ target }) => setComment(target.value)}
                                                /> 
                                            </div>
                                        </div>

                                    </div>
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                    
                                    
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div> {/* /.8 */}
            </div> {/* /.row*/}
        </div>





    )
}

export default ContactForm