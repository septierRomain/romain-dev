import React, { useContext } from 'react'

// Context
import ThemeContext from '../../Context/ThemeContext'

// Styles
import './portfolio.scss'

// Projets
import Kalees from './Projects/kalees';
import Instalike from './Projects/instalike';
import Pokedex from './Projects/pokedex';
import MyPortfolio from './Projects/portfolio';
import TripPlanner from './Projects/tripPlanner';

function Portfolio() {

  const {darkTheme} = useContext(ThemeContext)

  return(
    <div
      id='Portfolio'
      className={
      darkTheme ?
      'darkTheme' :
      ''}
    >
      <div className='contents'>
        <h1 className='titre'>
          Mes realisations
        </h1>
        <hr />
        <div id='portfolio-cards'>
          <Kalees />
          <Instalike />
          <MyPortfolio />
          <TripPlanner />
          <Pokedex />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;