import React from 'react';
import {Link} from 'react-router-dom'
import './home.css'

const home = () => {
    return (
        <div id="page-top">

            <header className="bg-primary bg-gradient text-white" >
                <div className="container px-4 text-center">
                    
                    <h1 className="fw-bolder">Bienvenido a CazuStore</h1>
                    <p className="lead">La tienda #1 de Perú!</p>
                    <Link className="btn btn-lg btn-dark" to="/products">Empieza comprando</Link>
                </div>
            </header>

            <section id="about">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h2>Acerca de CazuStore</h2>
                            <span className="lead">En esta tienda encontrarás los siguientes artículos:</span>
                            <ul>
                                <li>Laptops</li>
                                <li>Computadoras</li>
                                <li>Celulares</li>
                                <li>Componentes de laptop</li>
                                <li>Componentes de computadora</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light" id="services">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h2>Garantia</h2>
                            <span className="lead">Todos nuestros productos tienen garatia por 1 año, aplicando nuestra politica de garantia.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h2>Seguridad</h2>
                            <span className="lead">Todos tus pagos a travez de esta web estan encriptados con SSL y son totalmente seguros.</span>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-5 bg-dark">
                <div className="container px-4"><span className="m-0 text-center text-white">Copyright &copy; CazuStore</span></div>
            </footer>         

        </div>
    )
};

export default home;