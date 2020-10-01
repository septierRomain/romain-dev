import React, {useContext} from 'react';
import { Card, Icon, Label } from 'semantic-ui-react'

import trip from '../../../assets/trip planner.PNG'
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
        {/* <a
        href='https://my-trip-planer.herokuapp.com/'
        target='blank'
        ><Icon name='eye' />
        </a> */}
      </div>
    </div>
  )

  return (
    <div className="project-content" style={{ position: "relative" }}>
      <Card
        className={darkTheme ? "project-card darkTheme" : "project-card"}
        image={trip}
        description="Application web permettant d'organiser un voyage entre amis."
        extra={extra}
        data-tip="TripPlanner"
      />
      <Label as="a" color="red" ribbon >
        TripPlanner
      </Label>
    </div>
  );
}
export default TripPlanner;