import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navegation/navbar';
import Home from './components/pages/home';
import Shop from './components/pages/shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
