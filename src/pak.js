import React, {useState} from 'react';
import './room.css'


function Appi() {
  let [islit, setlet]= useState(true);
  let [myage, incage]= useState(20);
  let [temp, roomtemp]= useState(22);
  // function a(){
  //   return setlet(!islit);
  // }
  function b(){
    return incage(++myage);
  }
  return <div className={islit? "dark": "lit"}>
      this room is {islit? "dark": "lit"}
      <br />
      age= {myage}
      <br />
      temprature is: {temp}
      <br />
      <button onClick= {()=> setlet(!islit) } >click to change light</button>
      
      <button onClick={b}>click to increse age</button>
      <button onClick={()=>roomtemp(45)}>my room temprature</button>
      <button onClick={()=>roomtemp(22)}>normal room temprature</button>


  </div>
}

export default Appi;
