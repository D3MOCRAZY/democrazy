import React from 'react';
import Game from './spelkomponent/spelet.js';


export default class Main extends React.Component{

    // constructor(props){
    //   super(props)
    // }
    render(){
      return (
        <>
          <main className="main">
            <Game>
            </Game>
          </main>
        </>
      )
    }

};
