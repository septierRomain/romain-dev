import React, { useContext } from 'react'

// Style
import './competences.scss'

// Context
import ThemeContext from '../../Context/ThemeContext'
// import SvgAdobephotoshop from '../IconComponent/Adobephotoshop'
import SvgCss3 from '../IconComponent/Css3'
import SvgGit from '../IconComponent/Git'
import SvgJavascript from '../IconComponent/Javascript'
import SvgLinux from '../IconComponent/Linux'
import SvgMongodb from '../IconComponent/Mongodb'
import SvgNodeDotJs from '../IconComponent/NodeDotJs'
import SvgReact from '../IconComponent/React'

// Image

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
        <div id='softskills' className="skills-list">
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
              {/* <SvgAdobephotoshop /> */}

              <SvgCss3 />
              <SvgGit />
              <SvgJavascript />
              <SvgLinux />
              <SvgMongodb />
              <SvgNodeDotJs />
              <SvgReact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competences;