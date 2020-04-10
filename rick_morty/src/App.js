import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Characters from './components/Characters';
import Locations from './components/Locations';
import Episodes from './components/Episodes';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/"><Home/></Route>
    <Route exact path="/characters"><Characters/></Route>
    <Route exact path="/locations"><Locations/></Route>
    <Route exact path="/episodes"><Episodes/></Route>
  </div>
);

export default App;
