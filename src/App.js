import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {

   constructor(props) {
        super(props);
        this.state = {
       numQuestions:0,
        numCorrect:0,
          a:Math.floor(Math.random() * 100),
          b:Math.floor(Math.random() * 100),
          c:Math.floor(Math.random() * 100),
         
                   
      }
       this.state.p = Math.floor(Math.random() * 3) + this.state.a+this.state.b+this.state.c

   }
  right=()=>{this.setState((prevstate) => {
       let aa=Math.floor(Math.random() * 100)
       let bb=Math.floor(Math.random() * 100)
       let cc=Math.floor(Math.random() * 100)
       let pp=Math.floor(Math.random() * 3) + aa + bb + cc;
       if (prevstate.a+prevstate.b+prevstate.c==prevstate.p){
          return  { numQuestions :prevstate.numQuestions+1,
               numCorrect :prevstate.numCorrect+1,
                a:aa,
                b:bb,
                c:cc,
                p:pp
               };
       }else{
          return  { numQuestions :prevstate.numQuestions+1,
               numCorrect :prevstate.numCorrect,
                a:aa,
                b:bb,
                c:cc,
                p:pp
               };
       }
      });}
  
  
  
    wrong=()=>{this.setState((prevstate) => {
       let aa=Math.floor(Math.random() * 100)
       let bb=Math.floor(Math.random() * 100)
       let cc=Math.floor(Math.random() * 100)
       let pp=Math.floor(Math.random() * 3) + aa + bb + cc;
       if (prevstate.a+prevstate.b+prevstate.c==prevstate.p){
          return  { numQuestions :prevstate.numQuestions+1,
               numCorrect :prevstate.numCorrect,
                a:aa,
                b:bb,
                c:cc,
                p:pp
               };
       }else{
          return  { numQuestions :prevstate.numQuestions+1,
               numCorrect :prevstate.numCorrect+1,
                a:aa,
                b:bb,
                c:cc,
                p:pp
               };
       }
      });}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.a} + ${this.state.b} + ${this.state.c} = ${this.state.p}`}</p>
          </div>
          <button onClick={this.right} >True</button>
          <button onClick={this.wrong}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
