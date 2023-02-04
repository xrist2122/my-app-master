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
  let govno;
  if(smena){
    govno={
      backgroundColor:"white"
    }
  }else{
    govno={
      backgroundColor:"black"
    }
  }
  let ponos;
  if(smena){
    ponos={
      backgroundColor:"white"
    }
  }else{
    ponos={
      backgroundColor:"black"
    }
  }
  



  return <div style={govno}>
  <input type="checkbox" checked={smena} onChange={() => setChange(!smena)} />
  <button style={ponos}>fjbg</button>

  
  {/* <button onClick={() => setText(!vopros)}>btn1</button>
  <p>{vopros ?<h3 style={daa}>еестьь</h3>:<h3 style={nee}>нееет</h3>}</p> */}
  </div>
    
  ;

}

export default App;
