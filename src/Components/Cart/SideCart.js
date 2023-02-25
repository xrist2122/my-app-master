import { useState } from "react";
import './SideCart.css'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
function SideCart() {
  const[openCart,setOpenCart]=useState(true)
  const[value,setValue]=useState(0)
  const[value1,setValue1]=useState(0)
  const[gold,setNewPage]=useState(false)

  let message;
  if(gold){


  }
  let styleOverflow={}
  let styleSideBlock={}
  if(openCart){
    styleOverflow={width:"100%"};
    styleSideBlock={width:"385px"};

  }else{
    styleOverflow={width:"0"}
    styleSideBlock={width:"0"}
  }

  let content = gold ? <div className="CartItems" id="puki">
  <div className="CartItem" id="kaki">
  <Button variant="outline-light" id="cool" onClick={()=> setNewPage(!gold)}>Вернуться назад</Button>
  <h6 style={{marginTop:"10px"}}>Ваш заказ принят в работу!
      Соси мои яйца
  </h6>
    <h2 style={{marginTop:"10px"}}>Заказа оформмлен</h2>
    <img src="img/XUYYYYY.png" id="zabiyki"/>

  </div>
</div> :  <div><Stack direction="horizontal" gap={3} id="topCart">
  <div className="element" id="poleno"><h1>Корзина</h1></div>
  <div className="element ms-auto"><img src="img/CloseButton.svg" onClick={() => setOpenCart(!openCart)} /></div>
</Stack>
<div className="CartItems">
  <div className="CartItem">
    <img src="img/shrek.png" id="CartItemImg" />
    <div className="Itemtext">
      <p>Зелёный чай "Моли Грей"</p>
      <p><b>200 p/унция</b></p>
    </div>
    <div className="RemoveButton">
      <img src="img/CloseButton.svg" />
    </div>
    <div className="CountButtons">
      <img src="img/Add.png" onClick={()=> setValue(value+1)} />
      <input type="text" maxLength="2" value={value} onChange={event => setValue(event.target.value)} />
      <img src="img/Remove.png" onClick={()=> setValue(value-1)} />

    </div>
  </div>
</div>
<div className="CartItems">
  <div className="CartItem">
    <img src="img/shrek.png" id="CartItemImg" />
    <div className="Itemtext">
      <p>Зелёный чай "Моли Грей"</p>
      <p><b>200 p/унция</b></p>
    </div>
    <div className="RemoveButton">
      <img src="img/CloseButton.svg" />
    </div>
    <div className="CountButtons">
      <img src="img/Add.png" onClick={()=> setValue1(value1+1)} />
      <input type="text" maxLength="2" value={value1} onChange={event => setValue1(event.target.value)} />
      <img src="img/Remove.png" onClick={()=> setValue1(value1-1)} />

    </div>
  </div>
</div>
<div className="pizdec">
<div className="content">
  <h4>Итого: ...............1000 Р</h4>
  <h4>Налог 39%: ..............100 Р</h4>
  <Button variant="outline-light" id="cool" onClick={()=> setNewPage(!gold)}>Оформить заказ</Button>
</div>
</div>

</div>

  

  return <div className="MainCart">
    <div className="Overflow" style={styleOverflow} onClick={() => setOpenCart(!openCart)}></div>
    <div className="SideBlock" style={styleSideBlock}>

  
     {content}
    

  </div>
  </div>
  
    
  ;

}

export default SideCart;
