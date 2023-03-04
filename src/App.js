import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Button,Card} from 'react-bootstrap';
import Header from './Components/Header/Header';
import "./index.css"
import Main from './Components/Main/slider';
import AllCards from './Components/Main/AllCards';
import SideCart from './Components/Cart/SideCart';

function App() {
  const[openCart,setOpenCart]=useState(false)
  

  return<>
  <SideCart openCart={openCart} onOpenCart={() =>setOpenCart(false)}/>
  <Header onCloseCart={() =>setOpenCart(true)}/>
  <Main />
  <AllCards /></>
  
    
  ;

}

export default App;
