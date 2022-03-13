import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/pages/Cart/Cart'
import { CartContextProvider } from './context/CartContext';
import { NotificationServicesProvider } from './services/Notification/Notification';


function App() {


    return (
        <div className="App">
            <NotificationServicesProvider>  
                <CartContextProvider>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/products" element={<ItemListContainer />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/brand/:brandName" element={<ItemListContainer />} />
                            <Route path="/category/:categoryName" element={<ItemListContainer />} />
                            <Route path="/item/:productId" element={<ItemDetailContainer />} />
                            <Route path="*" element={<ItemListContainer />} status={404} />
                        </Routes>

                    </BrowserRouter>
                </CartContextProvider>
            </NotificationServicesProvider>  
        </div>
    );
}

export default App;
