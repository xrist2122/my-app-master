import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[value,setText]=useState("0")
  let year=new Date()



  return <>
  <input value={value} onChange={event =>setText(event.target.value)} />
  <p>Возраст : {year.getFullYear()-value}</p></>
    
  ;

}

export default App;
