import React from 'react'

import './portfolio.scss'

function Portfolio() {
  return(
    <div id='portfolio'>
      <div className='content'>
        <h1 className='titre'>
          Mes realisations
        </h1>
        <hr />
        <div id='portfolio-card'>
          <a href='https://kalees.netlify.app/' target='blank'>Kalees</a>
          <a href='https://eloquent-edison-pokedex.netlify.app/' target='blank'>Pokedex</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;