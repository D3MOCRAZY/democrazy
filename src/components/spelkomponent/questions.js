import React from 'react';

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      question: props.question
    }
  }
  render(){
    return(
      <>
        <h2>{this.state.question.q}</h2>
      </>
    )
  }
}

export { Questions };
