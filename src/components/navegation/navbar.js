import React from 'react';
import '../CartWidget'
import CartWidget from '../CartWidget';
import Logo from '../../Logo.png'
import{ Navbar, Nav, NavDropdown, Container}  from "react-bootstrap";

const NavBar = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} width="40" alt="Facebook"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/ItemListContainer">Productos</Nav.Link>
                        <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Celulares</NavDropdown.Item>
                            <NavDropdown.Item href="#">Computadoras</NavDropdown.Item>
                            <NavDropdown.Item href="#">Laptops</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Hardware</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" ><CartWidget>4</CartWidget></Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }; 

export default NavBar;
