import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './components/pages/Home/home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Login from './components/Login/Login'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/products"  element={<ItemListContainer/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/category/:categoryName"  element={<ItemListContainer/>} />
          <Route path="/item/:productId" element={<ItemDetailContainer/>} />
          <Route path="*" element={<ItemListContainer/>} status={404}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
