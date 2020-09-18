import React from 'react'
import {Icon} from 'semantic-ui-react'

import './footer.scss'

function Footer() {
  return(
    <div id="Footer">
      <p>
        <span className='leftFooter'>
          Codé avec <Icon name='heart outline' />
          par Septier Romain.
        </span>
        <span className='rightFooter'>
          <Icon name='creative commons' />
          Tous droits réservés.
        </span>
      </p>
    </div>
  )
};

export default Footer;