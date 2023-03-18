import {Stack,Button} from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';
import './Profile.css'
import { Link } from "react-router-dom";

function Profile(){
    return (
        <div className="MainContent1">

        <h3 style={{color:"white"}}>Добро пожаловать,ёбанный задрот</h3>
    
        <Link to="/"><Button variant="outline-light" class="ms-auto">Выйти</Button></Link>
        </div>)

}
export default Profile;