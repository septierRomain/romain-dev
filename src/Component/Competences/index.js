import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'

import './competences.scss'
import ThemeContext from '../../Context/ThemeContext'

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
        <p>
          Etiam mattis tristique semper. Quisque quis scelerisque ante, quis accumsan augue. Integer id dignissim mauris. Etiam vel lectus tempus, consequat nisl vel, consequat orci. Sed viverra dui nec libero porta eleifend. Pellentesque ullamcorper pharetra nunc eu porta. Curabitur magna lectus, cursus id nunc a, aliquet mollis felis.
        </p>
        <div className='competences-list'>
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
  )
}

export default Competences;