import React from 'react'
import './Display.css';
function Display() {
    const currDate= new Date();
    let time = currDate.toLocaleTimeString();
    let greeting = "";
   if(currDate.getHours()>1 && currDate.getHours() < 12){
    greeting = 'Good Morning have nice day';

   }
   else if(currDate.getHours() >=12 && currDate.getHours() < 18){
    greeting="Good afternoon ready for lunch"
   }
   else if(currDate.getHours() >=18 && currDate.getHours() <= 24){
     
    greeting="Good Night Go to sleep"
   }
  return (
    <div >

        <h1 className='msg'>`{greeting}</h1>
    </div>
  )
}

export default Display