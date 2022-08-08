import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudTableRow from "./CrudTableRow";
import"./CrudTable.css"

const CrudTableC = () => {
  const { db: data } = useContext(CrudContext);
  let newData = data.filter((el) => el.idUsuario == 5);
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Acta</th>
            <th>direccion</th>
            <th>Nombre p</th>
            <th>Apellido</th>
            <th>telefono</th>
            <th>cedula</th>
            <th>Confirmar</th>
            <th>Pago</th>

            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {newData.length > 0 ? (
            newData.map((el) => <CrudTableRow key={el.id} el={el} />)
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

export default CrudTableC;
