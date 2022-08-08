import "./Headers.css"
import Imagen from "./usuario.png"
import { NavLink  } from "react-router-dom";



const HeadersC =  () =>{
return(
    <header className="headers"><h1 className="h1heders">Compass Point |</h1> <h2 className="h2heders">Inicio</h2> <nav id="navarheders"> <NavLink to="/cliente"><h4 className="h4heders">Inicio</h4></NavLink> <NavLink to="/solicitud"><h4 className="h4heders">solicitud</h4></NavLink><NavLink to="/contacto"><h4 className="h4heders">Contactos</h4></NavLink><img className="img" src={Imagen}/> <NavLink to="/"><h4 className="h4heders">Salir</h4></NavLink></nav> </header>
)}

export default HeadersC;