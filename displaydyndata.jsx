import { useState } from 'react'
import './App.css'


function App() {
  const [ names, setNames ] = useState([
    "Kishor", "Ganesh"
  ]); 

  function addName(){
    const name = prompt("Enter Student name ");
    setNames([...names, name]);
  }

  return (
    <div style={{ textAlign:"center " , marginTop:"30px"}}>
      <h1>Dynamic list Rendering</h1>
      <h2 style={{textAlign:"left"}}>updated Student list</h2>
      <ul style={{textAlign:"left"}}>
        {names.map((name)=>{
            return <li>{name}</li>
        })}
      </ul>
      <button onClick={addName}>Add Student</button>
    </div>
  )
}

export default App
