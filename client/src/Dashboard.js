import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () =>{
    let navigater = useNavigate();
    const [authUser, setAuth]=useState('');
    useEffect(() => {
      var authUser = localStorage.getItem('userName');
     setAuth(authUser); 
    }, 
    []);
    if(authUser == null){
        navigater('/Login');
    }
    var userName = authUser;
    
    return(
        <div> 
           <div className="main-box">
                <div className="row"> 
                    <div className="col-mg-12 text-center">
                        <h1> Добро пожаловать, <b>{userName}</b>. Это личный кабинет.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;