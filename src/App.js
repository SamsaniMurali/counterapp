import React from 'react'
import './Style.css'

const App = () => {
  return (
    <div className='flex'>
 
        <h1> Background Color Changer</h1>
        <input type='color' onChange={(e)=>{
            document.body.style.background=e.target.value
        }}/>
    
    </div>
  )
}

export default App