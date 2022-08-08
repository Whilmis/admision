import "./Headers.css"
import { NavLink  } from "react-router-dom";
import Imagen from "./usuario.png"



const Headers =  () =>{
return(
    <header className="headers"><h1 className="h1heders">Compass Point |</h1> <nav id="navarheders"> <NavLink to="/administrador"><h4 className="h4heders">Inicio</h4></NavLink> <NavLink to="/administrar"><h4 className="h4heders">Administrar</h4></NavLink><NavLink to="/usuarios"><h4 className="h4heders">usuarios</h4></NavLink><img className="img" src={Imagen}/> </nav> </header>
)}

export default Headers;