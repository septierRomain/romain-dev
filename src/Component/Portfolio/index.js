import React, { useContext } from 'react'
import { Card, Icon } from 'semantic-ui-react'

import './portfolio.scss'

// Pictures
import kalees from '../../assets/kalees.JPG'
import pokedex from '../../assets/pokedex.JPG'
import instalike from '../../assets/instalike.JPG'
import ThemeContext from '../../Context/ThemeContext'

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
          <div className='project-content'>
            <Card className={darkTheme ? 'project-card darkTheme':
            'project-card'}>
              <Card.Content header='Kalees' />
              <Card.Content description='Site vitrine dun artiste peintre/graffeur.' />
              <Card.Content extra>
                <div className='techno'>
                  <Icon name='react' />ReactJS
                </div>
                <div className='techno'>
                  <Icon name='js square' />Javascript ES6
                </div>
              </Card.Content>
              <Card.Content extra>
                <a href='https://github.com/Gizmo675/kalees' target='blank'>
                  <Icon name='code' />
                </a>
              </Card.Content>
            </Card>
            <a href='https://kalees.netlify.app/' target='blank'>
              <img src={kalees} alt='project'/>
            </a>
          </div>
          <div className='project-content'>
          <Card className={darkTheme ? 'project-card darkTheme':
            'project-card'}>
              <Card.Content header='Pokedex' />
              <Card.Content description='Creation dun pokedex via des requetes a une api.' />
              <Card.Content extra>
              <div className='techno'>
                  <Icon name='react' />ReactJS
                </div>
                <div className='techno'>
                  <Icon name='js square' />Javascript ES6
                </div>
                <div className='techno'>
                  Web API
                </div>
              </Card.Content>
              <Card.Content extra>
                <a href='https://github.com/Gizmo675/pokedex' target='blank'>
                  <Icon name='code' />
                </a>
              </Card.Content>
            </Card>
            <a href='https://eloquent-edison-pokedex.netlify.app/' target='blank'>
              <img src={pokedex} alt='project'/>
            </a>
          </div>
          <div className='project-content'>
          <Card className={darkTheme ? 'project-card darkTheme':
            'project-card'}>
              <Card.Content header='Clone instagram' />
              <Card.Content description='Clone du celebre reseau social instagram.' />
              <Card.Content extra>
              <div className='techno'>
                  <Icon name='react' />ReactJS
                </div>
                <div className='techno'>
                  <Icon name='js square' />Javascript ES6
                </div>
                <div className='techno'>
                  <Icon name='node js' />NodeJS
                </div>
                <div className='techno'>
                  MongoDB
                </div>
              </Card.Content>
              <Card.Content extra>
                <a href='https://github.com/Gizmo675/InstaLike' target='blank'>
                  <Icon name='code' />
                </a>
              </Card.Content>
            </Card>
            <img src={instalike} alt='project'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;