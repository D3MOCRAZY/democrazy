import React from 'react';


class Answers extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
        <button onClick={(e) => {this.props.answer(e)}}>Fråga 1</button>
        <button>Fråga 2</button>
        <button>Fråga 3</button>
        <button>Fråga 4</button>
      </>
    )
  }
}

export { Answers };
