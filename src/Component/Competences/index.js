import React from 'react'
import { Icon } from 'semantic-ui-react'

import './competences.scss'

function Competences() {
  return(
    <div id="competences">
      <div className='content'>
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
              <Icon className='react' />
              <Icon className='css3 alternate' />
              <Icon className='js' />
              <Icon className='node' />
              <Icon className='git' />
        </div>
      </div>
    </div>
  )
}

export default Competences;