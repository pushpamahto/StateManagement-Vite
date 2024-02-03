import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const increasevalue = ()=>{
    setCounter(counter+1)
  }

  const decreasevalue = ()=>{
    setCounter(counter-1)
  }
 

  return (
    <>
    <h1>Simple Counter App</h1>
    <h3>Count: {counter}</h3>
    <button onClick={increasevalue}>Increase</button>
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    <button onClick={decreasevalue}>Decrease</button>
     
    </>
  )
}

export default App
