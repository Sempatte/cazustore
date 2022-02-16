import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navegation/navbar';
import Home from './components/pages/home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ItemListContainer" exact element={<ItemListContainer/>} />
          <Route path="/Detail/:productid" exact element={<ItemDetailContainer/>} />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
