import { useState } from 'react'
import './App.css'

function UpdateName({ setName }){
  function changeName(){
    let res = prompt("Enter name:");
    setName(res);
  }
  return(
    <div>
      <button onClick={changeName}>Change User</button>
    </div>
  );
  
}

function DisplayName({ name }){
  return (<h2 style={{marginTop:"15px"}}> Hello { name }</h2>);
}

function App() {
  const [ name, setName ] = useState('Kishor'); 

  return (
    <div style={{ textAlign:"center " , marginTop:"30px"}}>
      <h1>Sharing Data Between Components (Props)</h1>
      <UpdateName setName={setName} />
      <DisplayName name={ name } />
    </div>
  )
}

export default App
