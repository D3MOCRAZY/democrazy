
import React from 'react';
import { GameConsumer } from '../../context/context.js';

class Results extends React.Component{
  constructor(){
    super()
    this.cssColors = [
      '#0923f4',
      '#c11010',
      '#178e17',
      '#992e2e'
    ];
  }
  render(){
    return(
      <GameConsumer>
        {(({ userAnswers, partyColors, userColorAffiliation, userAnswersPercentage }) =>
        <>
          <h2 className="questions">Du har mest samhörighet med {userColorAffiliation} politik</h2>
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
