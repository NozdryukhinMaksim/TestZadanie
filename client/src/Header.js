import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const Header = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" class="navbar-brand">Ноздрюхин</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    
      
      <Link to="/login" class="nav-item nav-link">Войти</Link>
      <Link to="/register" class="nav-item nav-link">Зарегестрироваться</Link>


    </div>
  </div>
</nav>
    )
}
export default Header;