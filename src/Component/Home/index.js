import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'

import './home.scss'
import ThemeContext from '../../Context/ThemeContext'

function Home() {

  const {darkTheme} = useContext(ThemeContext)

  return(
    <div
      id='Home'
      className={
      darkTheme ?
      'darkTheme' :
      ''}
    >
      <div className='contents'>
        <h1 className='titre'>
          Presentation
        </h1>
        <hr />
        <p>
          Je suis developpeur web diplomé depuis 2020 et photographe.
          Je concois et realise des sites web du cahier des charges jusqu'a la mise en ligne. Je peux intervenir seul ou en equipe. Je travaille en collaboration avec des webdesigners. Mes clients sont des sociétes, des artistes et des artisans. 

          J'aime les gens passionnées et engagés, j'aime travailler avec eux pour les accompagner dans leurs projets.
        </p>
        <hr />
        <div id='reseaux'>
          <div id='github'>
            <h2>Mon Github</h2>
              <a href='https://github.com/Gizmo675' target='blank'>
                <Icon className='github' size='massive' />
              </a>
          </div>
          <div id='linkedin'>
            <h2>Mon Linkedin</h2>
              <a href='https://www.linkedin.com/in/romain-septier/' target='blank'>
                <Icon className='linkedin' size='massive' />
              </a>
          </div>
          <div id='sandbox'>
            <h2>Mes sandbox</h2>
              <a href='https://codesandbox.io/u/Gizmo675' target='blank'>
                <Icon className='code' size='massive' />
              </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home