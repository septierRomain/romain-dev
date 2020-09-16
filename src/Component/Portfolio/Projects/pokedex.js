import React, {useContext} from 'react';
import { Card, Icon, Label } from 'semantic-ui-react'

import pokedex from '../../../assets/pokedex.JPG'
import ThemeContext from '../../../Context/ThemeContext';

function Pokedex () {

  const {darkTheme} = useContext(ThemeContext)

  const extra = (
    <div>
      <div>
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
      <div>
        <a href='https://github.com/Gizmo675/pokedex' target='blank'>
          <Icon name='github' />
        </a>
        <a
        href='https://eloquent-edison-pokedex.netlify.app/'
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
        image={pokedex}
        description="Creation dun pokedex via des requetes a une api."
        extra={extra}
        data-tip="Pokedex"
      />
      <Label as="a" color="red" ribbon style={{ position: "absolute", top:"0"}}>
        Pokedex
      </Label>
    </div>
  );
}
export default Pokedex;