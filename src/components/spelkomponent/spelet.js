import React from 'react';
// import { Theme } from './theme.js';
import { Questions } from './questions.js';
import { Answers } from './answers.js';

export default class Game extends React.Component{

    constructor(){
      super();
      this.state = {
        gameStarted: false,
        question: {q: 'fråga1'},
        answers: 'BORDE VARA EN ARRAY?',
        theme: 'BORDE VARA EN ARRAY?',
      };
      this.startGame = this.startGame.bind(this);
      this.userHasAnswered = this.userHasAnswered.bind(this);
    }

    startGame(){
      this.setState((state) => ({
        gameStarted: !state.gameStarted,
      }));
      console.log(this.state.gameStarted);
    }
    userHasAnswered(){
      this.setState((state) => {
        return{
          question: {q: 'fråga 2'}
        }
      })
    }
    render(){
      return (
        <section className="game-box">

          <article className={`${this.state.gameStarted ? 'game-after-start'  : 'game-before-start' }`}>
            {

              this.state.gameStarted ?

                  <>
                    <Questions question={this.state.question} />
                    <Answers answer={this.userHasAnswered} />
                  </>

              :

              <button className="startButton" onClick={(e) => {this.startGame(e)}}><span>:PLAY</span></button>
              
            }
          </article>
        </section>
      )
    }

};
