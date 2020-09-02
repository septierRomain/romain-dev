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
          <div className='project-content'>
            <div className='project-card'>
              <h3>
                Kalees
              </h3>
              <p>
                Site vitrine d'un artiste peintre/graffeur.
              </p>
            </div>
            <img src='https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' alt='project'/>
          </div>
          <div className='project-content'>
            <div className='project-card'>
            <h3>
                Pokedex
              </h3>
              <p>
                Creation d'un pokedex via des requetes a une api.
              </p>
            </div>
            <img src='https://images.unsplash.com/photo-1593642703013-5a3b53c965f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' alt='project'/>
          </div>
          <div className='project-content'>
            <div className='project-card'>
            <h3>
                Clone instagram
              </h3>
              <p>
                Clone du celebre reseau social instagram.
              </p>
            </div>
            <img src='https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' alt='project'/>
          </div>
          {/* <a href='https://kalees.netlify.app/' target='blank'>Kalees</a>
          <a href='https://eloquent-edison-pokedex.netlify.app/' target='blank'>Pokedex</a> */}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;