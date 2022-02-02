import React from 'react';
import {Link} from 'react-router-dom';

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    <Link to="/">
                        <img src="./logo2.png" width='120' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Contact</Link>
                            </li>
                        </ul>

                            <button type="button" className="btn btn-dark" type="submit">Login</button>

                    </div>
                </div>
            </nav>
        </div>
        )
    }; 

export default navbar;
