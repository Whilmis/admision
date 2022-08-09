import { Link, useNavigate  } from "react-router-dom";
import React, {  useState, useContext } from "react";
import UserContext from "../context/UserContext";

import "./Login.css";


const initailForm = {
  
    gmail:"",
    contrasena:"",
  
 
  };

const Login = () => 

{
    let navigate = useNavigate();
    const { dbU: data, actualisaActual,actualU } = useContext(UserContext);
    const [form, setForm] = useState(initailForm);

    const handleSubmit = () =>{
        data.forEach(element => {
            if(element.gmail === form.gmail){
                if(element.contrasena === form.contrasena){
                    
                    if( element.admin == "true"){
                        navigate("administrador")
                    }
                    else{
                        navigate("cliente");
                    }
                      
                   
                }

            }
            
        });
      
    }

    const handleChange = (e) => {
        setForm({ 
          ...form,
          [e.target.id]: e.target.value,
        });
      };
       // <div className="grupo">
      /* <input type="text" name="" id="name" required/><span className="barra"></span>
       <label for="">Nombre</label>
   </div>*/
    return(
        <div className="loginbody">
        <form onSubmit={handleSubmit}  id="form">
        <div class="form">
            <h1  id="loginh1">COMPASS POINT</h1>
            <h4 className="loginh4">Sistema de admision</h4>
            <h5 className="loginh5">Inicio de sesion</h5>
            <div class="grupo">
                <input type="email" name="" id="gmail" onChange={handleChange} value={form.gmail} required /><span className="barra"></span>
                <label for="">Email</label>
            </div>
            <div class="grupo">
                <input type="password" name="" id="contrasena" onChange={handleChange} value={form.contrasena} required /><span className="barra"></span>
                <label for="">Password</label>
            </div>
            <h4>no tienes cuenta de usueario?   <Link to="crear">click aqui</Link>  </h4>
            <button type="submit">Acceder</button>
        </div>
    </form>
    </div>
    );
}


export default Login;