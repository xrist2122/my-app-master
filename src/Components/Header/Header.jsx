import "./Header.css"
import Stack from 'react-bootstrap/Stack';
function Header(props) {
  

  return<div className="mainHeader"><Stack direction="horizontal" gap={3}>
  <div className='leftHeader'>
    <img src="/img/icons8-skull-crossbones-50 (1) 15.png"style={{"marginTop": "20px"}} width={40} height={40}/>
    <div className='leftHeaderText'>
    <h2 style={{"color": "white"}}>Black Market228</h2>
    <p style={{"color": "#9D9D9D"}}>НИКОГО НЕ ПРОСИМ</p>
    </div>
    </div>

    <div className='rightHeader ms-auto'>
    <img src="/img/Group.svg" width={20} height={20} onClick={() =>props.onCloseCart()}/>
    <span style={{"color": "#5C5C5C"}}>1500 р.</span>
    <img src="/img/zmdi_favorite-outline.svg" width={20} height={20}/>
    <img src="/img/Union.svg" width={20} height={20}/>
    </div>
    </Stack>

</div>
  
    
  ;

}
export default Header
