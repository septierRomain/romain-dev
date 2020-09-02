import React from 'react'
import { Link } from 'react-router-dom'

import './menu.scss'

function Menu() {
  return(
    <div id='Nav'>
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <div id="Menu">
        <li className='MenuLink'>
          <Link to='/'>Home</Link>
        </li>
        <li className='MenuLink'>
          <Link to='/competences'>Compétences</Link>
        </li>
        <li className='MenuLink'>
        <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li className='MenuLink'>
        <Link to='/contact'>Contact</Link>
        </li>
      </div>
    </div>
  )
};

export default Menu;