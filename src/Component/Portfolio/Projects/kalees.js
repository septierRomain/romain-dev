import React, {useContext} from 'react';
import { Card, Icon, Label } from 'semantic-ui-react'

import kaleesMac from '../../../assets/fake/kalees.png'
import ThemeContext from '../../../Context/ThemeContext';
import './projects.scss'

function Kalees () {

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
      </div>
      <div className='seeMore'>
        <a href='https://github.com/Gizmo675/kalees' target='blank'>
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
        image={kaleesMac}
        description="Site vitrine dun artiste peintre/graffeur."
        extra={extra}
        data-tip="Kalees"
      />
      <Label as="a" color="red" ribbon >
        Kalees
      </Label>
    </div>
  );
}
export default Kalees;