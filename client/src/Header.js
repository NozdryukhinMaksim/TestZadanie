import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';

const Header = () =>{
  let navigate = useNavigate()
  const [authe, setAuth]=useState('');
  useEffect(() => {
    var authe = localStorage.getItem('email');
   setAuth(authe); 
  }, 
  []);
  if(authe === null){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" class="navbar-brand">Ноздрюхин</Link>
        <div class="navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <Link to="/login" class="nav-item nav-link">Войти</Link>
            </li>
            <li class="nav-item">
            <Link to="/register" class="nav-item nav-link">Зарегистрироваться</Link>
            </li>
          </ul>
        </div>
      </nav>     
          )
  }
  else{
    const LogOut = () =>{
      localStorage.removeItem('email');
      localStorage.clear();
      navigate('/');
      window.location.reload();
    }
    return(

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" class="navbar-brand">Ноздрюхин</Link>
      
        <div class="navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <Link to="/Dashboard" class="nav-item nav-link">{authe}</Link>
            </li>
            <li class="nav-item active">
            <Link to="" class="nav-item nav-link" onClick={LogOut}>Выйти</Link>
            </li>
          
            
          </ul>
         
        </div>
      </nav> 
    )
  }
    
}
export default Header;