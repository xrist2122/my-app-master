import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Button,Card} from 'react-bootstrap';
import Header from './Components/Header/Header';
import "./index.css"
import Main from './Components/Main/slider';
import AllCards from './Components/Main/AllCards';
import SideCart from './Components/Cart/SideCart';
import { Route,Routes } from 'react-router-dom';
import Zakladki from './Components/Header/Zakladki'
import Profile from './Components/Header/Profile';


function App() {
  const[openCart,setOpenCart]=useState(false);
  const [cart,setCart]=useState([])
  function addProdToCart(newProd){
    setCart(prev =>[...prev,newProd])
  }
  

  return<>
  <SideCart openCart={openCart} onOpenCart={() =>setOpenCart(false)} cart={cart}/>
  <Header onCloseCart={() =>setOpenCart(true)}/>

  <Routes>
    <Route path='/' element={<><Main addProdToCart={(newProd) => addProdToCart(newProd)} /><AllCards  addProdToCart={(newProd) => addProdToCart(newProd)}/></>}></Route>
    <Route path='/zakladki' element={<Zakladki />}/>
    <Route path="/profile" element={<Profile />}></Route>
  </Routes>
  
  
    </>
  ;

}

export default App;
