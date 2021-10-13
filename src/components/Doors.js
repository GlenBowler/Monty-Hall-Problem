import React from 'react';
import "./Doors.css"

export default function Doors( props ) {
  const { door1, door2, door3, handler, reward, try_again, status } = props;
  //Giving doors id
  let doors = [
    {
      id:1
    },
    {
      id:2
    },
    {
      id:3
    }
  ]

  // map doors and display doors with rewards or hat
  let door = doors.map( (door, key) => 
    {
      //if statement to see which door user select
      //door 1
      if (door.id === door1 && door.id === reward){
        return (<div key={key} className="door">
                  <div id={door.id} className="door reward"></div>
                </div>)
      }else if(door.id === door1){
        return (<div key={key} className="door">
                  <div id={door.id} className="door hat"></div>
                </div>)
      }
      //door2
      if (door.id === door2 && door.id === reward){
        return (<div key={key} className="door">
                  <div id={door.id} className="door reward"></div>
                </div>)
      }else if(door.id === door2){
        return (<div key={key} className="door">
                  <div id={door.id} className="door hat"></div>
                </div>)
      }
      //door3
      if (door.id === door3 && door.id === reward){
        return (<div key={key} className="door">
                  <div id={door.id} className="door reward"></div>
                </div>)
      }else if(door.id === door3){
        return (<div key={key} className="door">
                  <div id={door.id} className="door hat"></div>
                </div>)
      //if the first pick been selectend will not trigger door
      }else if (status === "win" || status === "lose"){
        return <div key={key}><div id={door.id} className='door closed'></div></div>
      //second try
      }else{
        return <div key={key}><div id={door.id} className='door closed' onClick={handler}></div></div>
      }
      
    }
    
  )
  //function to get results of game
  function result() {
    if (status === "win") {
      return <h2>Congrats! You win a boat!</h2>
    } else if (status === "lose") {
      return <h2>You lose. You will get a hat.</h2>
    }
  }
  
  //style for the background
  const flex = {
    display: "flex",
    padding: "0px",
    margin: "0px"
  }
  
  //return display
  return (
    <div>
      <h1>Lets start</h1>
      <div style={flex}>
        {door}
      </div>
      {result()}
      <button onClick={try_again}>Try again</button><br></br>
    </div>
  )
}
