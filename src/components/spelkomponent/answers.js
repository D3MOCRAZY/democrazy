import React from 'react';
import { GameConsumer } from '../../context/context.js';

class GetAnswers extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    if(this.props.gameOn){
      return (
        <section className="answers-box">
            {
              this.props.colors[this.props.iteration].map((cell, index) => {
                return (<button
                          className="answer-items"
                          key={index + cell}
                          index={cell}
                          onClick={(e) => {this.props.updateAll(e)}}
                          >
                          {this.props.answers[index]}
                        </button>)
              })
            }
        </section>
      );
    }
  }
}


class Answers extends React.Component{
  constructor(props){
    super(props);
    this.checkStatus = this.checkStatus.bind(this);
  }
  checkStatus(gameOn){
    if(gameOn === false){
      return this.props.endGame();
    }
    return true
  }
  render(){
    return(
      <GameConsumer>
        {({ answers, iteration, updateAll, gameOn, colors }) => (
          <>
            {this.checkStatus(gameOn) &&
              <GetAnswers
                iteration={iteration}
                endGame={this.props.endGame}
                colors={colors}
                answers={answers}
                gameOn={gameOn}
                updateAll={updateAll}
              >
              </GetAnswers>
              }
          </>
        )}
      </GameConsumer>
    )
  }
};

export {Answers};
