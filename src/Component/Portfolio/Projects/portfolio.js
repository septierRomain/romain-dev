import React, {useContext} from 'react';
import { Card, Icon, Label } from 'semantic-ui-react'

import portofolio from '../../../assets/instalike.JPG'
import ThemeContext from '../../../Context/ThemeContext';
import './projects.scss'

function MyPortfolio () {

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
          SCSS
        </Label>
      </div>
      <div className='seeMore'>
        <a href='https://github.com/Gizmo675/romain-dev' target='blank'>
          <Icon name='github' />
        </a>
        <a
        href='https://septier-romain.tech/'
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
        image={portofolio}
        description="Mon portfolio."
        extra={extra}
        data-tip="Portfolio"
      />
      <Label as="a" color="red" ribbon style={{ position: "absolute", top:"1em"}}>
        Portfolio
      </Label>
    </div>
  );
}
export default MyPortfolio;