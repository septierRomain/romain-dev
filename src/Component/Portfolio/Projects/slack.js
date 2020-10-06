import React, {useContext} from 'react';
import { Card, Icon, Label } from 'semantic-ui-react'

import slack from '../../../assets/slack chat.PNG'
import slackMac from '../../../assets/fake/slack.png'
import ThemeContext from '../../../Context/ThemeContext';

function Slack () {

  const {darkTheme} = useContext(ThemeContext)

  const extra = (
    <div className='extra'>
      <div className='techno'>
        <Label>
          ReactJS
        </Label>
        <Label>
          Redux
        </Label>
        <Label>
          Javascript
        </Label>
        <Label>
          Firebase
        </Label>
      </div>
      <div className='seeMore'>
        <a href='https://github.com/Gizmo675/Chat' target='blank'>
          <Icon name='github' />
        </a>
        <a
        href='https://chat-like-slack.netlify.app/'
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
        image={slackMac}
        description="Creation d'une web app de messagerie"
        extra={extra}
        data-tip="slack"
      />
      <Label as="a" color="red" ribbon >
        Slack
      </Label>
    </div>
  );
}
export default Slack;