import React from 'react';
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../Logo.png'
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
                        <Nav.Link href="/Home">Inicio</Nav.Link>
                        <Nav.Link href="/ItemListContainer">Productos</Nav.Link>
                        <Nav.Link href="/">Quienes somos</Nav.Link>
                        <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/category/Celulares">Celulares</NavDropdown.Item>
                            <NavDropdown.Item href="/category/Computadoras">Computadoras</NavDropdown.Item>
                            <NavDropdown.Item href="/category/Laptops">Laptops</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/category/Hardware">Hardware</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" ><CartWidget>0</CartWidget></Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            Iniciar sesión
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }; 

export default NavBar;
