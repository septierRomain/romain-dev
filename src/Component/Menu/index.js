import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Icon, Button} from 'semantic-ui-react'

// Style
import './menu.scss'

// Context
import ThemeContext from '../../Context/ThemeContext'

function Menu() {

  const {darkTheme, setDarkTheme} = useContext(ThemeContext)

  return(
    <div id='Nav'>
      <label htmlFor="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <div id="Menu">
      <Icon
      color={darkTheme ? 'white' : 'black'}
      name={darkTheme ? 'sun' : 'moon'}
      onClick={()=>setDarkTheme(!darkTheme)}
      />
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