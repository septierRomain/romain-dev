import React, {useContext} from 'react';
import { Card, Icon, Label } from 'semantic-ui-react'

import twitch from '../../../assets/fake/twitch.jpg'
import ThemeContext from '../../../Context/ThemeContext';
import './projects.scss'

function Twitch () {

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
          API
        </Label>
      </div>
      <div className='seeMore'>
        <a href='https://github.com/Gizmo675/twitch-clone' target='blank'>
          <Icon name='github' />
        </a>
        <a
        href='https://admiring-cori-96f86e.netlify.app'
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
        image={twitch}
        description="Clone du site de streaming twitch."
        extra={extra}
        data-tip="Twitch"
      />
      <Label as="a" color="red" ribbon >
        Twitch
      </Label>
    </div>
  );
}
export default Twitch;