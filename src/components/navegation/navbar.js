import React from 'react';
import {Link} from 'react-router-dom';
import '../CartWidget'
import CartWidget from '../CartWidget';
import Logo from '../../Logo.png'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    <img width="55" src={Logo} alt="Logo1"></img>
                </Link>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">


                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ItemListContainer">Items</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact</Link>
                        </li>

                    </ul>

                </div>


                <div className="d-flex align-items-center">
                    <CartWidget>
                        4
                    </CartWidget>

                    <button className="btn btn-dark" type="button">Login</button>
                </div>

            </div>

        </nav>
        )
    }; 

export default NavBar;
