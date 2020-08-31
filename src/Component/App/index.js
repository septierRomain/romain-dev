import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss';

//Composant
import Menu from '../Menu'
import Home from '../Home'
import Footer from '../Footer'
import Competences from '../Competences';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/competences'>
            <Competences />
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
