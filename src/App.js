import './App.css';
import React, { Component } from 'react';
import Doors from './components/Doors'

class App extends Component {

  constructor() {
    super()
    //binding funtions
    this.eventHandler = this.eventHandler.bind(this);
    this.restartGame = this.restartGame.bind(this)
    this.openDoor = this.openDoor.bind(this)
    this.add = this.add.bind(this)
    this.state = 
    {
      //set values for new game and hide the price
      prizeBoat: Math.floor(Math.random() * 3) + 1,
      choice1: 0,
      door1: 0,
      door2: 0,
      door3: 0,
      counter: 0,
      status: ""
    }
  }
  
  //function to set values for new game and hide the price
  restartGame(){
    this.setState({
      //gets a random number between 0 and 4
      prizeBoat: Math.floor(Math.random() * 3) + 1,
      choice1: 0,
      door1: 0,
      door2: 0,
      door3: 0,
      counter: 0,
      status: ""
    })
  }

  //Function to open the door
  openDoor(){
    const pick = this.state.choice1;
    const prize = this.state.prizeBoat;
    //array for the 3 doors
    let doors = [1, 2, 3];
    //array of that shows what door should not be opened
    let unopened = [pick, prize]
    //array that shows which door should be opened
    let open = doors.filter(x => unopened.indexOf(x) === -1);
    //Set the state
    this.setState({
      ///returned door that should be opened
      door1: open[0]
    })
  }

  //increase the counter to make sure user got another q after first chance
  add() {
    this.setState((prevState) => ({
       counter: prevState.choiceCount + 1
    }))
  }
  
  eventHandler(event) {
    this.add()
    //if this is the player's second turn the status is set to lose
    if (this.state.counter < 1) {
      //adds 1 to choice count
      //next door is called
      this.setState({
        //adds 1 to counter
        choice1: parseInt(event.target.id),
        counter: this.state.counter + 1
        //next door is opened
      }, () => this.openDoor())
      
    }else {
      let win = this.state.prizeBoat;
      if (parseInt(event.target.id) === win) {
        this.setState({
          //opens the final door that is clicked and set status to win
          door3: parseInt(event.target.id),
          status: "win"
        })
      }else {
        this.setState({
          //opens the final door status set to lose
          door3: parseInt(event.target.id),
          status: "lose"
        })
      }
    }
  }

  render(){
    return (
      <div>
        <div className="App">
          <Doors status={this.state.status}
          result={this.state.status}
          door1={this.state.door1}
          door2={this.state.door2}
          door3={this.state.door3}
          handler={this.eventHandler}
          try_again={this.restartGame} 
          reward={this.state.prizeBoat} 
          firstPick={this.state.choice1} />
        </div>
      </div>
    );
  }
  
}

export default App;

