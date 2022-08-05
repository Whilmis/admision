import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  const { db: data } = useContext(CrudContext);

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
            <th>id</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <CrudTableRow key={el.id} el={el} />)
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

export default CrudTable;
