import React from 'react';
import { useEffect, useState, useContext } from 'react'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../Logo.png'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Container}  from "react-bootstrap";
import {getBrands, getCategories } from '../../api';
import CartContext from '../../context/CartContext';
import './Navbar.css'

const NavBar = () => {
    const { getLenghtCart } = useContext(CartContext)
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {

        getCategories().then((querysnapshot) => {  
            setCategories(querysnapshot.docs.map(doc => doc.data()));
        }).catch((err) =>{
            console.log(err);
        })
        
        getBrands().then((querysnapshot) => {
            setBrands(querysnapshot.docs.map(doc => doc.data()));
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
                        <NavLink className="nav-link" to="/home">Información</NavLink>                        
                        <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                            {categories.map((category, index) => (
                                <NavLink key={index} className="dropdown-item" to={`/category/${category.name}`}>{category.name}</NavLink>
                            ))}

                        </NavDropdown>
                        <NavLink className="nav-link" to="/products">Todos los productos</NavLink>
                        <NavDropdown title="Marcas" id="collasible-nav-dropdown">
                            {brands.map((brand) => (
                                <NavLink key={brand.id} className="dropdown-item" to={`/brand/${brand.name}`}>{brand.name}</NavLink>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/cart" ><CartWidget>{getLenghtCart()}</CartWidget></NavLink>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }; 

export default NavBar;
