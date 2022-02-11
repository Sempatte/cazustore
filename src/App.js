import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navegation/navbar';
import Home from './components/pages/home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ItemListContainer" exact component={ItemListContainer} />
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
