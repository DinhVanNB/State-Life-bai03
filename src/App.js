import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        firstNumber:null,
        secondNumber:null,
        result:null
    }
  }
  onChange =(e)=>{
    this.setState({
      firstNumber: e.target.name==='input1'&& parseInt(e.target.value)?  e.target.value: this.state.firstNumber,
      secondNumber: e.target.name==='input2'&& parseInt(e.target.value)?  e.target.value: this.state.secondNumber
    })
  }
  onClick=(e)=>{
    let reSult;
    switch(e.target.innerHTML){
      case 'x':
        reSult=  this.state.firstNumber* this.state.secondNumber;
        break
      case '+':
        reSult=  (+this.state.firstNumber) + (+this.state.secondNumber);
        break;
      case '-':
        reSult =  this.state.firstNumber - this.state.secondNumber;
        break;
      case '/':
        reSult =  this.state.firstNumber / this.state.secondNumber;
        break;
      default:
        reSult  =null;
        break;
    }
    this.setState({
      result: reSult? reSult:  this.state.result
    })
  }
  render(){
    let {firstNumber, secondNumber,result} = this.state;
    return (

      <div className="App">
        <input onInput={this.onChange} name={'input1'} defaultValue={firstNumber? firstNumber:'' } type="text"/>
        
        <input onInput={this.onChange} name={'input2'} defaultValue={secondNumber?secondNumber:''} type="text"/>
        <p>
         &nbsp; Result: &nbsp;  {result}
        </p>
        &nbsp;&nbsp;<button onClick={this.onClick}>x</button>
        &nbsp;&nbsp;<button onClick={this.onClick}>+</button>
        &nbsp;&nbsp;<button onClick={this.onClick}>-</button>
        &nbsp;&nbsp;<button onClick={this.onClick}>/</button>
      </div>
    );
  }
  
}

export default App;
