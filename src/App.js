import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './components/pages/home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/ItemListContainer"  element={<ItemListContainer/>} />
          <Route path="/category/:id"  element={<ItemListContainer/>} />
          <Route path="/item/:productId" element={<ItemDetailContainer/>} />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
