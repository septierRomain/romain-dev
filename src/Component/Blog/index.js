import React, { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';

import './blog.scss'

function Blog() {

  const {darkTheme} = useContext(ThemeContext)

  return(
    <div
      id='Blog'
      className={
        darkTheme ?
        'darkTheme' :
        ''}
    >
      <div className='contents'>
        <h1 className='titre'>
          Blog
        </h1>
        <hr />
        <div className='articles'>
          <p>
            Vous retrouverez ici les articles en rapport avec l'informatique.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog;