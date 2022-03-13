import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

const home = () => {
    return (
        <div id="page-top">

            <header className="bg-primary bg-gradient text-white" >
                <div className="container px-4 text-center">    
                    <h1 className="fw-bolder">Bienvenido a CazuStore</h1>
                    <p className="lead">La tienda #1 de Perú</p>
                    <Link className="btn btn-lg btn-dark" to="/products">Empieza comprando</Link>
                </div>
            </header>
            <div id="carousel" style={{ padding: "2.5rem" }} className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1500">
                        <Link to="/products"><img src="https://totemhardware.com.pe/wp-content/uploads/2021/12/Cooler-Master2.jpg" className="d-block w-100" alt="..." /></Link>
                    </div>
                    <div className="carousel-item" data-bs-interval="1500">
                        <Link to="/products"><img src="https://totemhardware.com.pe/wp-content/uploads/2022/01/Plantilla-web-header.png" className="d-block w-100" alt="..." /></Link>
                    </div>
                    <div className="carousel-item" data-bs-interval="1500">
                        <Link to="/products"><img src="https://totemhardware.com.pe/wp-content/uploads/2022/01/Plantilla-web-header-kingston.png" className="d-block w-100" alt="..." /></Link>``
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


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
                            <h2>Garantía</h2>
                            <span className="lead">Para hacer válida la garantía es necesario presentar el ticket o nota de compra, asimismo, llevar el producto intacto al establecimiento donde fue adquirido o directamente a las oficinas de la fábrica (sin tratar de repararlo uno mismo y sin abrir los sellos de garantía). De esta manera, su producto podrá ser reemplazado o reembolsado según su preferencia.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h2>Seguridad</h2>
                            <span className="lead">Todos tus pagos a través de esta web están encriptados con SSL y son totalmente seguros.</span>
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
