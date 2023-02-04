import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const[vopros,setText]=useState(false)
  // let daa={
  //   color:"green"
  // };
  // let nee={
  //   color:"crimson"
  // };
  const[smena,setChange]=useState(true)
  let jopa;
  if(smena){
    kvadat.style.backgroundColor="white"
    krud.style.backgroundColor="white";

  }else{
    kvadat.style.backgroundColor="black"
    krud.style.backgroundColor="black";

  }



  return <div className='krud'>
  <input type="checkbox" checked={smena} onChange={() => setChange(!smena)} />
  <button className='kvadat'>fjbg</button>
  
  {/* <button onClick={() => setText(!vopros)}>btn1</button>
  <p>{vopros ?<h3 style={daa}>еестьь</h3>:<h3 style={nee}>нееет</h3>}</p> */}
  </div>
    
  ;

}

export default App;
