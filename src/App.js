
import logo from './logo.svg';
import './App.css';
import React ,  { Component }from 'react';
import  { useState } from 'react';
import Print from './Printhistory';
import {BiTrash} from "react-icons/bi";
import { Button } from './Button.js'; 
import WheelComponent from 'react-wheel-of-prizes' ;
import styles from './mystyle.module.css'; 
import "./Switch.css";
 

function App() {
   const[input,setInput] = React.useState([]);
   const[result , setResult] = React.useState("");
   const[text,setText] = React.useState();
   const[record, setRecord] = React.useState([]);
  const [isToggled, setIsToggled] = useState(false);

   let array = [];
//lucky Wheel-------------------------------------------------------------
let segments = ["das","dsa"]
const segColors = [
  '#EE4040',
  '#F0CF50',
  '#815CD1',
  '#3DA5E0',
  '#34A24F',
  '#F9AA1F',
  '#EC3F3F',
  '#FF9000'
]
const onFinished = (winner) => {
  console.log(winner)
}




//--------------------------------------------------------------------
 


 function Switch() {
  
  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}

 const handleChange = (e) => {
  e.preventDefault();
   array = e.target.value.split("\n"); 
   setText(e.target.value)

  let A_length = array.length;
  for(let i = 0 ; i< A_length; i++  ){
    if(array[i] === "" || array[i] === " " ){
        array.splice(i, 1 );
        i--;
    }
  }
 console.log(segments)
   setInput(array)
   
};
 const handleDraw = () =>{
       let num =  Math.floor(Math.random() * input.length);
       setResult( input[num]);
       //store fresh result into record holder
       setRecord(record => record.concat(input[num]))

      
      // console.log(input)
 };
 const clearState = () => {
    setText("")
    setInput([])
    setResult("")
    setRecord([])
 }




  return (
    <div>
    <div className="mid-box">

     
        <h1 className='title'> Lucky Draw</h1>
         <span  className='animation-text'>Animation</span>
         <Switch/>
       
      <br></br>
      
       <div className='main-content'> 
         <textarea
          type="text" 
          value ={text}
          id = 'area' 
          className='textarea' 
          onChange={handleChange} 
           placeholder= "Put your items here.&#10;Press Enter after each input.">

           </textarea>
            <span className= ' clear-button' onClick={clearState}><BiTrash size={30}/> </span>
           <br></br>
       </div>

        
        <Button onClick= {handleDraw} text = "DRAW"/>

       <div className='output-zone'>
             
             <h2 className={isToggled ? styles.animatetext : styles.notanimatetext}>{result}</h2>
             <br></br>
             
          
       </div>  
        <div className='luckywheel'>
        
    
    
          
        </div>
       
        <div className='record'>

            <Print record = {record} />

        </div>

     
    </div>
    
    </div>
  );

}

export default App;