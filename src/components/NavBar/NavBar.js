import React from 'react';
import { useEffect, useState, useContext } from 'react'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../Logo.png'
import {Link} from 'react-router-dom'
import{ Navbar, Nav, NavDropdown, Container}  from "react-bootstrap";
import { getBrands, getCategories } from '../../asyncmock';
import CartContext from '../../context/CartContext';
import './Navbar.css'

const NavBar = () => {
    const { getLenghtCart } = useContext(CartContext)
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {

        getCategories().then((categories) => {
            setCategories(categories);
        }).catch((err) =>{
            console.log(err);
        })
        
        getBrands().then((brands) => {
            setBrands(brands);
        }).catch((err) =>{
            console.log(err);
        })
        
    },[])

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
                        <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                            {categories.map((category) => (
                                <Link key={category.id} className="dropdown-item" to={`/category/${category.name}`}>{category.name}</Link>
                            ))}
                            {/* <Link className="dropdown-item" to="/category/Celular">Celulares</Link>
                            <Link className="dropdown-item" to="/category/Computadora">Computadoras</Link>
                            <Link className="dropdown-item" to="/category/Laptop">Laptops</Link>
                            <NavDropdown.Divider />
                            <Link className="dropdown-item" to="/category/Hardware">Hardware</Link> */}
                        </NavDropdown>
                        <Link className="nav-link" to="/products">Todos los productos</Link>
                        <NavDropdown title="Marcas" id="collasible-nav-dropdown">
                            {brands.map((brand) => (
                                <Link key={brand.id} className="dropdown-item" to={`/brand/${brand.name}`}>{brand.name}</Link>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link className="nav-link" to="/cart" ><CartWidget>{getLenghtCart()}</CartWidget></Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }; 

export default NavBar;
