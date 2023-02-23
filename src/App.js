import React, { useState } from 'react'
import './Style.css'
function App() {
  const[counter,setCounter]=useState(0)
  const stock=10;
  return (
    <div className='wrapper'>
    <h1>Counter App</h1>
      <button className='minus' disabled={counter===0} onClick={()=>{
        if(counter>0){
          setCounter(counter-1)
        }
      }}>-</button>
      <p className='counter'>{counter}</p>
      <button className='plus' disabled={counter===stock} onClick={()=>{
        if(counter<stock){
          setCounter(counter+1)
        }
      }}>+</button>
    </div>
  )
}

export default App