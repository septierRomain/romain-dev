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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et elit scelerisque, molestie purus ut, eleifend magna. Maecenas rutrum viverra turpis, eget vestibulum justo rhoncus eu. Suspendisse ac condimentum est, feugiat volutpat sapien. Donec at tellus velit. Maecenas gravida nulla a porta congue. Cras sit amet lectus pharetra diam mollis aliquet ut sit amet elit. Nam eu magna ac metus imperdiet rutrum.
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