import React from 'react';
import { GameConsumer } from '../../context/context.js';

class Theme extends React.Component{
  render(){
    return(
      <GameConsumer>
        {(({ themes }) =>
        <>
          <div>TEMA HÄR</div>
        </>
        )}
      </GameConsumer>
    )
  }
}

export { Theme };
