import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ScrollApp from './components/ScrollWrapper/ScrollWrapper';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Login from './components/User/Login';
import Register from './components/User/Register';

import NavBar from './components/NavBar/NavBar';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </main>
)

function App() {
  return (
    <div className="App">
        <ScrollApp />
        <NavBar />
        <Main />
    </div>
  );
}

export default App;
