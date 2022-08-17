import React, { useContext, useState, useEffect } from "react";
import CrudContext from "../context/CrudContext";
import CrudTableRow from "./CrudTableRow";
import Busqueda from "./Busqueda";
import axios from "axios";
import {ExportToExcel} from './exportToExcel'

const CrudTable = () => {
  const fileName = "compass-point";
  const [dataAPI, setData] = React.useState([])
  
  const getDataRequest = async () => {
    try {
        const resp = await axios.get('https://compasspoint.herokuapp.com/api/v1/forms');
        console.log(resp.data);
        setData(resp.data);
    } catch (err) {
        console.error(err);
    }
  };

  useEffect(() => {
   getDataRequest();

  }, [])
  let { db: data } = useContext(CrudContext);
  let newData = data.filter((el) => el.pago )
  let newData2 = data.filter((el) => el.confirmacion )
  const [form, setForm] = useState(false);
  const [nombre, setnombre] = useState(null);
  const [dataf, setdataf] = useState([]);
 /* 
  const [filtro, setfiltro] = useState(false);
  const [datafiltro, setdatafiltro] = useState([]);
 */

  const handleChange = (e) => {
    setnombre( e.target.value
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setdataf(data.filter((el) => el.nombreEstudiante == nombre ))
    setForm(true);
    

  
  }

  return (
    <div>
      <h3>Tabla de Datos</h3>
      <form id="formt" onSubmit={handleSubmit}>

<div className="grupo">
<input
    type="text"
    name="nombreEstudiante"
    placeholder=""
    onChange={handleChange}
   value={nombre}
  /><label for="name" class="form_label">buscar por nombre</label>
  <span class="form__line"></span>
      </div>

      <input type="submit" value="Enviar"  id="btn" className="enviar"/>
        <input type="reset" value="Limpiar" id="btn" className="limpiar" />
      </form>
      <div className="resumeng" >
        <div className="elemento">
            <h3>Total de solitudes</h3>
            <p>{data.length}</p>
        </div>

        <div className="elemento">
            <h3> Solitudes pagadas</h3>
            <p>{newData.length}</p>
        </div>

        <div className="elemento">
            <h3> Solitudes Confimadas</h3>
            <p>{newData2.length}</p>
        </div>

         </div>
         <ExportToExcel apiData={dataAPI} fileName={fileName} />

         { form? (
            dataf.map((el) => <Busqueda key={el.id} el={el} />)
          ) : null}
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

        
       { data.length > 0 ? (
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
