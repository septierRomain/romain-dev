import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Style
import './App.scss';

// Context
import {ThemeContext} from '../../Context/ThemeContext'

//Composant
import Menu from '../Menu'
import Home from '../Home'
import Footer from '../Footer'
import Competences from '../Competences';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import NotFound from '../404';

function App() {

  const [ darkTheme, setDarkTheme ] = useState(false)

  return (
    <div id="App"
    // className={
    //   darkTheme ?
    //   'darkTheme' :
    //   ''
    // }
    >
      <BrowserRouter>
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
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
            {/* Fallback - gestion de 404 */}
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
