import React from 'react';

import './404.scss'

function NotFound() {
  return(
    <div id='notFound'>
      <div className='contents'>
        <h1 className='titre'>
          Page non trouvée
        </h1>
        <p>
          Tu es perdu ? 
          Il n'y a pas ce genre de page ici (^_^)
        </p>
      </div>
    </div>
  )
}

export default NotFound;