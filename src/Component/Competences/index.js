import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'

// Style
import './competences.scss'

// Context
import ThemeContext from '../../Context/ThemeContext'

// Image
// import photoshop from '../../assets/adobe-photoshop.png'
// import mongo from '../../assets/mongodb.png'

function Competences() {

  const {darkTheme} = useContext(ThemeContext)

  return(
    <div 
    id="Competences"
    className={
      darkTheme ?
      'darkTheme' :
      ''}
    >
      <div className='contents'>
        <h1 className='titre'>
          Compétences
        </h1>
        <hr />
        <p>    
          Au cours de mon cursus de formation j'ai pu apprendre differentes competences que j'ai mis a profit dans divers langage de programmation et divers projets.
          J'ai une preference toute particulier pour le front-end et de fait le Javascript qui est omnipresent. 
          J'adore combiner la technique, la logique et le design. Le developpement web me permet de laisser libre court a ma creativité.
          J'ai eu la chance d'avoir plusieurs vies pro. Tantot comptable en cabinet d'expertise comptable puis ensuite directeur de course sur un circuit automobile. J'ai desormais allié ma passion et mon metier. 
        </p>
        <hr />
        <div id='softskills'>
          <p>Quelques particularités de ma personnalité, je suis a la fois :</p>
          <ul>
            <li>
              Organisé
            </li>
            <li>
              Rigoureux
            </li>
            <li>
              Curieux
            </li>
            <li>
              A l'ecoute
            </li>
          </ul>
        </div>
        <div className='competences-list'>
          <div className='competences-icon'>
              <Icon className={
                darkTheme ?
                'react darkTheme' :
                'react'
              } />
              <Icon className={
                darkTheme ?
                'css3 alternate darkTheme' :
                'css3 alternate'
              } />
              <Icon className={
                darkTheme ?
                'js darkTheme' :
                'js'
              } />
              <Icon className={
                darkTheme ?
                'node darkTheme' :
                'node'
              } />
              <Icon className={
                darkTheme ?
                'git darkTheme' :
                'git'
              } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competences;