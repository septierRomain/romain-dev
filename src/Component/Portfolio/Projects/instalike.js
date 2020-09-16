import React, {useContext} from 'react';
import { Card, Icon, Label } from 'semantic-ui-react'

import insta from '../../../assets/instalike.JPG'
import ThemeContext from '../../../Context/ThemeContext';

function Instalike () {

  const {darkTheme} = useContext(ThemeContext)

  const extra = (
    <div className='extra'>
      <div className='techno'>
        <Label>
          ReactJS
        </Label>
        <Label>
          Javascript
        </Label>
        <Label>
          NodeJS
        </Label>
        <Label>
          MongoDB
        </Label>
      </div>
      <div className='seeMore'>
        <a href='https://github.com/Gizmo675/InstaLike' target='blank'>
          <Icon name='github' />
        </a>
        <a
        href='https://kalees.netlify.app/'
        target='blank'
        ><Icon name='eye' />
        </a>
      </div>
    </div>
  )

  return (
    <div className="project-content" style={{ position: "relative" }}>
      <Card
        className={darkTheme ? "project-card darkTheme" : "project-card"}
        image={insta}
        description="Clone du celebre reseau social instagram."
        extra={extra}
        data-tip="Insta"
      />
      <Label as="a" color="red" ribbon style={{ position: 'absolute', top:'0' }}>
        Insta
      </Label>
    </div>
  );
}
export default Instalike;