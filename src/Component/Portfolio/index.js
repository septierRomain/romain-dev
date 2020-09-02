import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import './portfolio.scss'

function Portfolio() {
  return(
    <div id='portfolio'>
      <div className='contents'>
        <h1 className='titre'>
          Mes realisations
        </h1>
        <hr />
        <div id='portfolio-cards'>
          <div className='project-content'>
            <Card className='project-card'>
              <Card.Content header='Kalees' />
              <Card.Content description='Site vitrine dun artiste peintre/graffeur.' />
              <Card.Content extra>
                <Icon name='react' />ReactJS
              </Card.Content>
              <Card.Content extra>
                <a href='https://github.com/Gizmo675/kalees' target='blank'>
                  <Icon name='code' />
                </a>
                <a href='https://kalees.netlify.app/' target='blank'>
                  <Icon name='eye' />
                </a>
              </Card.Content>
            </Card>
            <img src='https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' alt='project'/>
          </div>
          <div className='project-content'>
          <Card className='project-card'>
              <Card.Content header='Pokedex' />
              <Card.Content description='Creation dun pokedex via des requetes a une api.' />
              <Card.Content extra>
                <Icon name='react' />ReactJS
              </Card.Content>
              <Card.Content extra>
                <a href='https://github.com/Gizmo675/pokedex' target='blank'>
                  <Icon name='code' />
                </a>
                <a href='https://eloquent-edison-pokedex.netlify.app/' target='blank'>
                  <Icon name='eye' />
                </a>
              </Card.Content>
            </Card>
            <img src='https://images.unsplash.com/photo-1593642703013-5a3b53c965f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' alt='project'/>
          </div>
          <div className='project-content'>
          <Card className='project-card'>
              <Card.Content header='Clone instagram' />
              <Card.Content description='Clone du celebre reseau social instagram.' />
              <Card.Content extra>
                <Icon name='react' />ReactJS
              </Card.Content>
              <Card.Content extra>
                <a href='https://github.com/Gizmo675/InstaLike' target='blank'>
                  <Icon name='code' />
                </a>
                <a href='#' target='blank'>
                  <Icon name='eye' />
                </a>
              </Card.Content>
            </Card>
            <img src='https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' alt='project'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;