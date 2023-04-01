import {Stack,Button,Card} from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';
import './Profile.css'
import { Link } from "react-router-dom";

function Profile(){
    return<>
        <div className="MainContent1">
           <h3 style={{color:"white"}}>Добро пожаловать,ёбанный задрот</h3>
           <Link to="/"><Button variant="outline-light" class="ms-auto">Выйти</Button></Link>
        </div>
        <div className='profille'>
        <Card style={{ width: '18rem',backgroundColor:"#1C2C3A",border:"0" }}>
      <Card.Img variant="top" src="img/66556 1.png" />
      <Card.Body>
        <Card.Title style={{color:"white"}}>Это вы лошара</Card.Title>
        <Card.Text style={{color:"white"}}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt quos facere culpa voluptates aliquid totam. Alias, consequatur sequi eos quae pariatur modi! Tempora delectus, eveniet esse atque dolorem repellat.</p>
        </Card.Text>
        <Link to="/"><Button variant="outline-light" class="ms-auto">Выйти из профиля</Button></Link>
      </Card.Body>
    </Card>
        </div>
        </>


}
export default Profile;