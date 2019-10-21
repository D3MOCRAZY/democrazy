import React from 'react';
import data from '../assets/data.json';
/*
  Unused code but safekept for sentimental reasons  (It's a great piece of code)
*/

//Initiala kontexten skapas
const GameContext = React.createContext({
  questions: [],
  colors:[],
  answers: [],
  userColorAffiliation: '',
  partyColors:[],
  userAnswers: [],
  userAnswersPercentage: [],
  updateAll: function(){},
  endG: function(){},
});

/*
    Children är egentligen
    prop till föräldern vilket gör att man kan skriva såhär:
   <ColorContext.Provider>{this.props.children} </ColorContext.Provider>.

   Vid varje rendering av komponent i "app.js" använder man alltså
   klassen "ColorProvider" för att wrappa allt man vill ska få tillgång
   till kontexten och Consumer(förmågan att prenumerera)
*/

class GameProvider extends React.Component{

  constructor(props){
    super(props)
      this.state = {
        questions: data.questions,
        answers: data.answers,
        colors: data.colors,
        partyColors: ['blå','röd', 'grön', 'brun', 'all'], //Compare what got chosen
        iteration: 0, //iteration on this renders new questions and answers
        gameOn: true, //flipping End of game
        userAnswers: [0, 0, 0, 0],
        userAnswersPercentage: [0,0,0,0],
        userColorAffiliation: '',
        updateAll: this.updateAll.bind(this),
      }
      this.endG = this.endG.bind(this);
  }

  //metod för att räkna plussa på "userAnswer"-arrayens.
  userAnswer(color){

    //looping through all colors comparing them to
    //the value that was chosen.
    // the order in partyColors is crucial for this solution to work.
    this.state.partyColors.forEach((clr , index) => {
      if(color === clr && color !== "all"){
        this.setState((state) => {
          return (++state.userAnswers[index])
        });
      }
    })
  }

  //Ska kalkulera resultatet i userAnswer-arrayen och
  //trigga resultat-skärm.
  endG(){


    var combinedVal = 0;

    //getting max value to count the percentage
    this.state.userAnswers.forEach((amount, index) => {
      combinedVal += amount;
    });
    console.log(combinedVal);
    //Calculating percentage of color affiliation.
    var tempArr = [0,0,0,0];
    //((input - min) * 100) / (max - min)
    this.state.userAnswers.forEach((amount, index) => {
        let AmountInPercentage = Math.floor((amount * 100) / combinedVal);
        tempArr[index] = AmountInPercentage;
    });
    //Sorting out max value of percentage
    var max = 0;
    var maxIndex = 0;

    for(let i = 0; i < tempArr.length; i++){
        if(tempArr[i] > max){
          max = tempArr[i];
          maxIndex = i;
        }
    }

    //ending game state on to off
    this.setState((state) => {
      return {
        gameOn: !state.gameOn,
        userColorAffiliation: state.partyColors[maxIndex],
        userAnswersPercentage: tempArr
      }
    });

  }

  componentDidUpdate(){
    console.log(this.state.userAnswers);
  }

  updateAll(e){
    //checkar ifall iterationen är längre än antalet frågor
    //ifall det är det ska iterationsvariabeln plussar på med ett
    //ifall inte ska resultatet räknas ut i else nedan.

    if((this.state.questions.length - 1) !== this.state.iteration){
      //updating userAnswer-array

      this.userAnswer(e.target.getAttribute('index'));
      //uptating the "iteration-state" which triggers re-iteration
      this.setState((state) => {
        return{
          iteration: ++state.iteration,
        }
      });

    }else{
      //adding results
      this.userAnswer(Number(e.target.getAttribute('index')));
      //calculating results
      //result calculation method goes here.
      console.log('Trigger Endgame screen...');
      this.endG();

    }
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

/*
  Exporterar "Consumer" vilket är en react-komponent som
  ger andra FUNKTION-komponenter makten att prenumerera på kontextens
  förändringar.
*/

const GameConsumer = GameContext.Consumer;

export { GameConsumer, GameProvider, GameContext };
