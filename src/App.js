import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navegation/NavBar';
import Home from './components/pages/Home';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <ItemListContainer greeting="Hola mundo!"/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ItemListContainer" exact component={ItemListContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
