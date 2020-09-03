import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {Icon} from 'semantic-ui-react'

// Style
import './menu.scss'

// Context
import ThemeContext from '../../Context/ThemeContext'

function Menu() {

  const {darkTheme, setDarkTheme} = useContext(ThemeContext)
  const [ active, setActive ] = useState(false)

  return(
    <div id='Nav' className={
      darkTheme ?
      'labelWhite' : 
      ''
    }
    >
      {/* <label 
        htmlFor="toggle"
        onClick={()=>setActive(!active)}
      >
        &#9776;
      </label>
      <input 
      type="checkbox"
      id="toggle"
      /> */}
      <div id="Menu"       
      className={
        active ?
        'active' :
        "inactive"
      }>
      <Icon
        color={darkTheme ? 'yellow' : 'black'}
        name={darkTheme ? 'sun' : 'moon'}
        onClick={()=>setDarkTheme(!darkTheme)}
      />
        <li className='MenuLink' onClick={()=>setActive(!active)}>
          <Link to='/'>Home</Link>
        </li>
        <li className='MenuLink' onClick={()=>setActive(!active)}>
          <Link to='/competences'>Compétences</Link>
        </li>
        <li className='MenuLink' onClick={()=>setActive(!active)}>
        <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li className='MenuLink' onClick={()=>setActive(!active)}>
        <Link to='/contact'>Contact</Link>
        </li>
      </div>
    </div>
  )
};

export default Menu;