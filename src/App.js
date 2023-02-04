import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[vopros,setText]=useState(false)



  return <>
  <button Onclick={() => setText(!vopros)}>btn1</button>
  <p>{vopros ?"есть ":"нет"}</p>
  </>
    
  ;

}

export default App;
