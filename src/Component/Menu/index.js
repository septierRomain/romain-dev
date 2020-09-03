import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './menu.scss'
import ThemeContext from '../../Context/ThemeContext'

function Menu() {

  const {darkTheme, setDarkTheme} = useContext(ThemeContext)

  return(
    <div id='Nav'>
      <label htmlFor="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <div id="Menu">
      <button 
      onClick={()=>setDarkTheme(!darkTheme)}
      >
        Switch theme
      </button>
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