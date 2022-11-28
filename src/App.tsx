import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
        <Route exact path={"/home"} component={Home}/>
        <Route exact path={"/contact"} component={Contact}/>

        <Route exact path={"/"} component={Home}/>

    </BrowserRouter>
  );
}

export default App;
