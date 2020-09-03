import React, { useContext } from 'react';
import './contact.scss'
import ThemeContext from '../../Context/ThemeContext';

function Contact() {

  const {darkTheme} = useContext(ThemeContext)

  return(
    <div id='contact'>
      <div className='contents'>
        <h1 className='titre'>
          Contactez moi !
        </h1>
        <hr />
        <p>
          Un projet, une question ou simplement echanger autour d'un verre ? N'hesitez pas a me contacter.
        </p>
        <div 
        className={darkTheme ?
          'darkLink' : 
          ''
        }>
          <a href='mailto:septier.romain@protonmail.com'>septier.romain@protonmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact;