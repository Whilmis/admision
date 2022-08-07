import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({ el }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);
  let { nombreEstudiante,apellidoEstudiante,actaNacimiento,direccion,nombrePadre,apellidoPadre,telefono,cedula,confirmacion,pago, id } = el;

  return (
    <tr>
      <td>{nombreEstudiante}</td>
      <td>{apellidoEstudiante}</td>
      <td>{actaNacimiento}</td>
      <td>{direccion}</td>  
      <td>{nombrePadre}</td>
      <td>{apellidoPadre}</td>
      <td>{telefono}</td>
      <td>{cedula}</td>
      <td>{confirmacion? "Confirmado":"En Proceso"}</td>
      <td>{pago? "Realizado": "NO realizado"}</td>
      
   
      <td>
        <button onClick={() => setDataToEdit(el)} className="editar">Editar</button>
        <button onClick={() => deleteData(id)} className="eliminar">Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
