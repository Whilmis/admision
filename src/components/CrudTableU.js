import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import CrudTableRowU from "./CrudTableRowU";
import"./CrudTable.css"

const CrudTableU = () => {

  const { dbU: data } = useContext(UserContext);

  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>gmail</th>
            <th>Contraseña</th>
            <th>Admin</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <CrudTableRowU key={el.id} el={el} />)
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTableU;