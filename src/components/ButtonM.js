import Button from '@mui/material/Button';
import { useModal } from '../hook/useModal';
import './Modal.css'
import { useState } from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


const ButtonM = ({el})=>{
    let { nombreEstudiante,apellidoEstudiante,actaNacimiento,direccion,nombrePadre,apellidoPadre,telefono,cedula,confirmacion,pago, id } = el;
    let {estate,setestate} = useState(true)
    const handelPrint = ()=>{   window.print()};
    const evento = ( )=>{setestate(false) };
   
   
    const[isOpenModal,openModal,closeModal] = useModal(false);
    return(<div><Button onClick={openModal}>Detalle</Button><div><div className={`modal ${isOpenModal && "is-open"}`} onClick={closeModal}><div className='modal-container'> <h1>Compass Point</h1><div onClick={handelPrint}><PictureAsPdfIcon color="primary"/> </div> <hr></hr><div className='info'>
         <div id="divb2"><h3>Nombre del estudiante</h3> <p>{nombreEstudiante}</p></div> 
   <div id="divb2"><h3>Apellido del estudiante</h3> <p>{apellidoEstudiante}</p></div>
   <div id="divb2"><h3>Acta de Nacimiento</h3> <p>{actaNacimiento}</p></div> 
   <div id="divb2"><h3>Dirrecion</h3> <p>{direccion}</p></div> 
   <div id="divb2"><h3>Nombre del padre</h3> <p>{nombrePadre}</p></div> 
   <div id="divb2"><h3>Apellido del padre</h3> <p>{apellidoPadre}</p></div> 
   <div id="divb2"><h3>Telefono</h3> <p>{telefono}</p></div> 
   <div id="divb2"><h3>Cedula</h3> <p>{cedula}</p></div> 
   <div id="divb2"><h3>Confirmacion</h3><p> {confirmacion? "Confirmado":"En Proceso"}</p></div>  
   <div id="divb2"><h3>Pago</h3> <p>{pago? "Realizado": "NO realizado"}</p></div>  
        </div></div></div></div></div>);
}


export default ButtonM;