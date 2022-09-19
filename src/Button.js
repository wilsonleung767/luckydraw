import React from 'react'; 

const Button = (props) => { 
  
  return ( 
    
    <button className="draw-button" onClick={props.onClick}>{props.text}</button> 
   
  ); 
  
} 

export {Button};