import { useState } from "react";
import './SideCart.css'
function SideCart() {
  const[openCart,setOpenCart]=useState(true)
  let styleOverflow={}
  let styleSideBlock={}
  if(openCart){
    styleOverflow={width:"100%"};
    styleSideBlock={width:"385px"};

  }else{
    styleOverflow={width:"0"}
    styleSideBlock={width:"0"}
  }
  

  return <div className="MainCart">
    <div className="Overflow" style={styleOverflow} onClick={() => setOpenCart(!openCart)}></div>
    <div className="SideBlock" style={styleSideBlock}></div>

  </div>
  
    
  ;

}

export default SideCart;
