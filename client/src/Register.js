import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Register = () =>{
    let history = useNavigate();
    const [data, setData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value.trim()});
        
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password

        }
        console.log(sendData);
        axios.post('http://localhost/server/register.php', sendData)
        .then((result)=>{
            if (result.data.Status == 'Invalid') {alert('Неверный пользователь')}
            else {history('/Login')}
        })
    }
    return(
        <div className="main-box" >
           <form onSubmit={submitForm}>
        <div className="row">
            <div className="col-md-12 text-center"><h1>Регистрация</h1></div> 
            
        </div>
        <div className="row">
            <div className="col-md-6">Имя</div> 
            <div className="col-md-6">
                <input type="text"  maxLength="20" name="first_name" className="form-control" onChange={handleChange} value={data.first_name}/>

            </div>

        </div>
        <div className="row">
            <div className="col-md-6">Фамилия</div> 
            <div className="col-md-6">
                <input type="text"  maxLength="20" name="last_name" className="form-control" onChange={handleChange} value={data.last_name}/>

            </div>

        </div>
        <div className="row">
            <div className="col-md-6">Email</div> 
            <div className="col-md-6">
                <input type="email" name="email" className="form-control" onChange={handleChange} value={data.email}/>
                
            </div>

        </div>
        <div className="row">
            <div className="col-md-6">Пароль</div> 
            <div className="col-md-6">
                <input type="password" name="password" className="form-control" onChange={handleChange} value={data.password}/>
                
            </div>

        </div>
        <div className="row">
            
            <div className="col-md-12 text-center">
                <input type="submit" name="submit" value="Зарегестрироваться" className="btn btn-success" />
                
            </div>

        </div>
        </form>
        </div>
    )
}
export default Register;