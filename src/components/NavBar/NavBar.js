import React from 'react';
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../Logo.png'
import {Link} from 'react-router-dom'
import{ Navbar, Nav, NavDropdown, Container}  from "react-bootstrap";

const NavBar = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} width="37" alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/home">Inicio</Link>
                        <Link className="nav-link" to="/products">Productos</Link>
                        <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                            <Link className="dropdown-item" to="/category/Celular">Celulares</Link>
                            <Link className="dropdown-item" to="/category/Computadora">Computadoras</Link>
                            <Link className="dropdown-item" to="/category/Laptop">Laptops</Link>
                            <NavDropdown.Divider />
                            <Link className="dropdown-item" to="/category/Hardware">Hardware</Link>
                        </NavDropdown>                      
                    </Nav>
                    <Nav>
                        <Link className="nav-link" to="#" ><CartWidget>0</CartWidget></Link>
                        <Link className="nav-link" to="/login">Iniciar sesión</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }; 

export default NavBar;
