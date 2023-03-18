import { useState } from "react";
import './SideCart.css'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem'

function SideCart(props) {
  let teas = [
    { id: 1, name: "Мистер Пропер", cost: 430, img: "./img/supplies-1.png" },
    { id: 2, name: "Негр обыкновенный", cost: 755, img: "./img/supplies-2.png" },
    { id: 3, name: "Негр необыновенный", cost: 800, img: "./img/supplies-3.png" },
    { id: 4, name: "АК-46 без магазина", cost: 210, img: "./img/supplies-4.png" },
  ]


  const [gold, setNewPage] = useState(false)


  let cards = props.cart.map(tea => {
    return   <><CartItem cost={tea.cost} name={tea.name} img={tea.img}/></>
  })
  let styleOverflow = {}
  let styleSideBlock = {}
  if (props.openCart === true) {
    styleOverflow = { width: "100%" };
    styleSideBlock = { width: "385px" };

  } else {
    styleOverflow = { width: "0" }
    styleSideBlock = { width: "0" }
  }
  let summ=0
  for(let i=0;i<props.cart.length;i++){
    summ+= Number(props.cart[i]['cost']);
  }

  let content = gold ? <div className="CartItems" id="puki">
    <div className="CartItem" id="kaki">
      <Button variant="outline-light" id="cool" onClick={() => setNewPage(!gold)}>Вернуться назад</Button>
      <h6 style={{ marginTop: "10px" }}>Ваш заказ принят в работу!
        Соси мои яйца
      </h6>
      <h2 style={{ marginTop: "10px" }}>Заказа оформмлен</h2>
      <img src="img/XUYYYYY.png" id="zabiyki" />

    </div>
  </div> : <div><Stack direction="horizontal" gap={3} id="topCart">
    <div className="element" id="poleno"><h1>Корзина</h1></div>
    <div className="element ms-auto"><img src="img/CloseButton.svg" onClick={() => props.onOpenCart(!props.openCart)} /></div>
  </Stack>
    <div className="CartItems">
      { cards}
    </div>
    
    <div className="pizdec">
      <div className="content">
        <h4>Итого: ...............{summ} Р</h4>
        <h4>Налог 39%: ..............100 Р</h4>
        <Button variant="outline-light" id="cool" onClick={() => setNewPage(!gold)}>Оформить заказ</Button>
      </div>
    </div>

  </div>
  let jamal=[]
  if(props.cart===[]){
    jamal=<div className="CartItems" id="puki">
    <div className="CartItem" id="kaki">
      <Button variant="outline-light" id="cool" onClick={() => setNewPage(!gold)}>Вернуться назад</Button>
      <h6 style={{ marginTop: "10px" }}>Корзина пуста, милорд!
        Соси мои яйца
      </h6>
      <h2 style={{ marginTop: "10px" }}>Иди купи чё нибудь</h2>
      <img src="img/XUYYYYY.png" id="zabiyki" />

    </div>
  </div>

  }else{
    <>jamal= gold ? <div className="CartItems" id="puki">
    <div className="CartItem" id="kaki">
      <Button variant="outline-light" id="cool" onClick={() => setNewPage(!gold)}>Вернуться назад</Button>
      <h6 style={{ marginTop: "10px" }}>Ваш заказ принят в работу!
        Соси мои яйца
      </h6>
      <h2 style={{ marginTop: "10px" }}>Заказа оформмлен</h2>
      <img src="img/XUYYYYY.png" id="zabiyki" />

    </div>
  </div> : <div><Stack direction="horizontal" gap={3} id="topCart">
    <div className="element" id="poleno"><h1>Корзина</h1></div>
    <div className="element ms-auto"><img src="img/CloseButton.svg" onClick={() => props.onOpenCart(!props.openCart)} /></div>
  </Stack>
    <div className="CartItems">
      { cards}
    </div>
    
    <div className="pizdec">
      <div className="content">
        <h4>Итого: ...............{summ} Р</h4>
        <h4>Налог 39%: ..............100 Р</h4>
        <Button variant="outline-light" id="cool" onClick={() => setNewPage(!gold)}>Оформить заказ</Button>
      </div>
    </div>

  </div></>

  }

  
    
    
    

  



  return <div className="MainCart">
    <div className="Overflow" style={styleOverflow} onClick={() => props.onOpenCart(!props.openCart)}></div>
    <div className="SideBlock" style={styleSideBlock}>


      {jamal}


    </div>
  </div>


    ;

}

export default SideCart;
