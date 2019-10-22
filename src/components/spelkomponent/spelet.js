import React from 'react';
// import { Theme } from './theme.js';
import { Questions } from './questions.js';
import { Answers } from './answers.js';
import { Results } from './results.js';

import { GameProvider } from '../../context/context.js';

export default class Game extends React.Component{

    constructor(){
      super();
      this.state = {
        gameStarted: false,
        gameWillEnd: false,
        gameEnded: false,
      };
      this.endGame = this.endGame.bind(this);
    }


    startGame(){
      //Flippar till starten av spelet
      this.setState((state) => {
        return {
          gameStarted: !state.gameStarted
        }
      });

    }

    endGame(){
      //Flippar läge till slutet av spelet
      console.log('Switching to result screen')
      this.setState((state) => {
        return {
            gameEnded: !state.gameEnded,
        }
      });

    }

    render(){
      return (
      <GameProvider>
          <section className={'game-after-start'}>

            {

              this.state.gameEnded

                ?

                <Results  />

                :

                <article className={`${this.state.gameStarted ? 'game-after-start'  : 'game-before-start' }`}>

                    {
                      this.state.gameStarted ?

                          <>
                            <Questions />
                            <Answers gameEnded={this.state.gameEnded} endGame={this.endGame}/>
                          </>

                      :
                      <section className="game-before-start-inner">
                        <p className="intro-text"></p>
                        <button className="startButton" onClick={(e) => {this.startGame(e)}}>:PLAY</button>
                      </section>
                  }
                </article>
            }
          </section>
      </GameProvider>
      )
    }

};
