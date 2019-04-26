import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {

  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);   
    this.state = {
      die1: 'one',
      die2: 'two',
      rolling: false
    };
  }

  roll(){
    let rnd1 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
    let rnd2 = this.props.sides[Math.floor(Math.random()*6)];
    this.setState({rolling: true});
    setTimeout(()=>{
      this.setState({die1: rnd1, die2: rnd2, rolling:false});
    },1000);
  }

  render() {
    return (
      <div className="RollDice">
        <Die face={this.state.die1} rolling={this.state.rolling}/>
        <Die face={this.state.die2} rolling={this.state.rolling}/><br/>
        <button onClick={this.roll.bind(this)} disabled={this.state.rolling}>
        {this.state.rolling ? "Rolling..." : "Roll the Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;