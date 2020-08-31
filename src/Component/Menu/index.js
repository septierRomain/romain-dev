import React from 'react'
import { Link } from 'react-router-dom'

import './menu.scss'

function Menu() {
  return(
    <div id="Menu">
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/competences'>Compétences</Link>
      </li>
      <li>
      <Link to='/portfolio'>Portfolio</Link>
      </li>
      <li>
      <Link to='/contact'>Contact</Link>
      </li>
    </div>
  )
};

export default Menu;