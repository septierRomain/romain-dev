import React, {useContext} from 'react';
import { Card, Icon, Label } from 'semantic-ui-react'

import pokedex from '../../../assets/pokedex.JPG'
import pokedexMac from '../../../assets/fake/pokedex.png'
import ThemeContext from '../../../Context/ThemeContext';

function Pokedex () {

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
        image={pokedexMac}
        description="Creation dun pokedex via des requetes a une api."
        extra={extra}
        data-tip="Pokedex"
      />
      <Label as="a" color="red" ribbon >
        Pokedex
      </Label>
    </div>
  );
}
export default Pokedex;