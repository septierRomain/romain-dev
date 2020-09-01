import React from 'react';
import './contact.scss'

function Contact() {
  return(
    <div id='contact'>
      <div className='content'>
        <h1 className='titre'>
          Contactez moi !
        </h1>
        <hr />
        <p>
          Un projet, une question ou simplement echanger autour d'un verre ? N'hesitez pas a me contacter.
        </p>
        <a href='mailto:septier.romain@protonmail.com'>septier.romain@protonmail.com</a>
      </div>
    </div>
  )
}

export default Contact;