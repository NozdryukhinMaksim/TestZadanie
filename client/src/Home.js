import { useState, useEffect } from 'react';
const Home = () =>{
    const [nameUser, setAuth]=useState('');
    useEffect(() => {
      var nameUser = localStorage.getItem('userName');
     setAuth(nameUser); 
    }, 
    []);
    if(nameUser == null){
        userName = "гость";
    }
    else{
        var userName = nameUser;
    }
    
    return(
        <div> 
           <div className="main-box">
                <div className="row"> 
                    <div className="col-mg-12 text-center">
                        <h1> Приветствую, {userName}. Это мое тестовое задание на вакансию PHP разработчика.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;