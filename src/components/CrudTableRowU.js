import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const CrudTableRowU = ({ el }) => {
  const { setDataToEditU, deleteDataU } = useContext(UserContext);
  let { nombre,apellido,gmail,contrasena, admin, id } = el;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{gmail}</td>
      <td>{contrasena}</td>  
      <td>{admin == "true"? "Si":"No"}</td>
 
      
   
      <td>
        <button onClick={() => setDataToEditU(el)} className="editar">Editar</button>
        <button onClick={() => deleteDataU(id)} className="eliminar">Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRowU;