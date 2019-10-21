import React from 'react';
import { GameConsumer } from '../../context/context.js';


class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      question: props.question
    }
  }


  render(){
    return(
      <GameConsumer>
        {({ questions, iteration }) => (
          <>
            <h2>{ questions[iteration] }</h2>
          </>
        )}
      </GameConsumer>
    )
  }
}

export { Questions };
