import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
/*import "./Busqueda.css"*/

const Busqueda = ({ el }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);
  let { nombreEstudiante,apellidoEstudiante,actaNacimiento,direccion,nombrePadre,apellidoPadre,telefono,cedula,confirmacion,pago, id } = el;

  return (
    <div id="divb">
   
   <div id="divb2"><h3>Nombre del estudiante</h3> <p>{nombreEstudiante}</p></div> 
   <div id="divb2"><h3>Apellido del estudiante</h3> <p>{apellidoEstudiante}</p></div> 
   <div id="divb2"><h3>Acta de Nacimiento</h3> <p>{actaNacimiento}</p></div> 
   <div id="divb2"><h3>Dirrecion</h3> <p>{direccion}</p></div> 
   <div id="divb2"><h3>Nombre del padre</h3> <p>{nombrePadre}</p></div> 
   <div id="divb2"><h3>Apellido del padre</h3> <p>{apellidoPadre}</p></div> 
   <div id="divb2"><h3>Telefono</h3> <p>{telefono}</p></div> 
   <div id="divb2"><h3>Cedula</h3> <p>{cedula}</p></div> 
   <div id="divb2"><h3>confirmacion</h3><p> {confirmacion? "Confirmado":"En Proceso"}</p></div>  
   <div id="divb2"><h3>pago</h3> <p>{pago? "Realizado": "NO realizado"}</p></div>  
      
   
      
        <button onClick={() => setDataToEdit(el)} className="editar" id="btn">Editar</button>
        <button onClick={() => deleteData(id)} className="eliminar" id="btn">Eliminar</button>
      
  </div>
  );
};

export default Busqueda;
