import { useState } from 'react'
import './App.css'


function App() {
  const [ count, setCount ] = useState(0); 

  return (
    <div style={{ textAlign:"center " , marginTop:"30px"}}>
      <h1>Update screen dynamically</h1>
      <h3>Counter : {count}</h3>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{if(count >= 1) setCount(count-1)}}
            style={{marginLeft:"20px"}}
      >
        Decrement
      </button>
    </div>
  )
}

export default App
