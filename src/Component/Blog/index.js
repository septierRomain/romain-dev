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
      </div>
    </div>
  )
}

export default Blog;