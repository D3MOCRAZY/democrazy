
import React from 'react';
import { GameConsumer } from '../../context/context.js';

class Results extends React.Component{
  constructor(){
    super()
    this.cssColors = [
      'blue',
      'red',
      'green',
      'brown'
    ];
  }
  render(){
    return(
      <GameConsumer>
        {(({ userAnswers, partyColors, userColorAffiliation, userAnswersPercentage }) =>
        <>
          <p>Du har mest samhörighet med {userColorAffiliation} politik</p>
          <article className="column-placeholder">
            {
              userAnswers.map((amount, index) => {
                return (
                    <div className="col" key={index  * (Math.random()* 3)} style={{height: (userAnswersPercentage[index] + 10) + '%', backgroundColor: this.cssColors[index]}}>
                      {userAnswersPercentage[index] + "%"}
                    </div>
                )
              })
            }
          </article>
        </>
        )}
      </GameConsumer>
    )
  }
}

export { Results };
