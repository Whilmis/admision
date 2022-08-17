import Imagen from "./mapa.JPG";
import Facebook from "./facebook-.png";
import Telefono from "./telefono.png";
import WhatsApp from "./WhatsApp.png";
import HeadersC from "./HeadersC"
import "./Contactos.css";



const Contactos = ( )=>{
    return(
        <div className="contac">
        <HeadersC/>
        <div className="contaccon">
       <a href="https://www.facebook.com/compasspointhomeschool" className="elemento1"> <img className="imgc" src={Facebook}/></a>
       <div className="elemento1"><a href="https://goo.gl/maps/YcW2uTRyCgz3BMiB9"> <img className="imgc" src={Telefono}/></a>  <p>(809)-222-8003</p> </div>
       <div className="elemento1"><a href="https://www.whatsapp.com/"> <img className="imgc" src={WhatsApp}/></a><p>(829)-322-0337</p></div>
       <a href="https://goo.gl/maps/YcW2uTRyCgz3BMiB9" className="elemento1"> <img className="imgm" src={Imagen}/></a>
       </div>
       </div>
    )
}

export default Contactos;