import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[vopros,setText]=useState(false)
  let daa={
    color:"green"
  };
  let nee={
    color:"crimson"
  };



  return <>
  <button onClick={() => setText(!vopros)}>btn1</button>
  <p>{vopros ?<h3 style={daa}>еестьь</h3>:<h3 style={nee}>нееет</h3>}</p>
  </>
    
  ;

}

export default App;
