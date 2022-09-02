import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () =>{
    let history = useNavigate()
    const [user, setUser]=useState({email:'',password:''})
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
           
            email:user.email,
            password:user.password

        }
        console.log(sendData);
        axios.post('http://localhost/server/login.php', sendData)
        .then((result)=>{
            if (result.data.status === '200') {
                window.localStorage.setItem('email', result.data.Email);
                window.localStorage.setItem('userName',result.data.first_name+ ' '+result.data.last_name);
                history('/')
                window.location.reload();
            }
            else {

            }
        })
    }
    return(
        <form onSubmit={submitForm}>
        <div className="main-box">
            <div className="row"> 
                <div className="col-mg-12 text-center">
                    <h1> Авторизация </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>Email:</p> 
                </div>
                <div className="col-md-6">
                    <input type="email" name="email" onChange={handleChange} value={user.email} className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>Пароль:</p> 
                </div>
                <div className="col-md-6">
                    <input type="password" name="password" onChange={handleChange} value={user.password} className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <input type="submit" name="submit" value="Авторизоваться" className="btn btn-success" />
                </div>
            </div>
        </div>
        </form>
    )
}
export default Login;