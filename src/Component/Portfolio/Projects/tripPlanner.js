import React, {useContext} from 'react';
import { Card, Icon, Label } from 'semantic-ui-react'

import kalees from '../../../assets/kalees.JPG'
import ThemeContext from '../../../Context/ThemeContext';
import './projects.scss'

function TripPlanner () {

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
          MongoDB
        </Label>
        <Label>
          NodeJS
        </Label>
      </div>
      <div className='seeMore'>
        <a href='https://github.com/Gizmo675/my-trip-planner' target='blank'>
          <Icon name='github' />
        </a>
        <a
        href='https://my-trip-planer.herokuapp.com/'
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
        image={kalees}
        description="Application web permettant d'organiser un voyage entre amis."
        extra={extra}
        data-tip="TripPlanner"
      />
      <Label as="a" color="red" ribbon style={{ position: "absolute", top:"0"}}>
        TripPlanner
      </Label>
    </div>
  );
}
export default TripPlanner;