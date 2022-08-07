import "./Headers.css"
import Imagen from "./usuario.png"



const Headers =  () =>{
return(
    <header className="header"><h1>Compass Point |</h1> <h2>Inicio</h2> <nav className="navar"> <h4>Inicio</h4> <h4>Admicion</h4><h4>usuarios </h4><img className="img" src={Imagen}/> </nav> </header>
)}

export default Headers;