import React, { useState, useEffect, useContext } from "react";
import CrudContext from "../context/CrudContext";
import "./CrudForm.css"

const initailForm = {
  nombreEstudiante: "",
  apellidoEstudiante: "",
  actaNacimiento:"",
  direccion:"",
  nombrePadre: "",
  apellidoPadre: "",
  telefono: "",
  cedula:"",
  confirmacion: false,
  pago: false,
  id: null,
};

const CrudForm = () => {
  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(CrudContext);

  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombreEstudiante || !form.apellidoEstudiante) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>

      <div className="grupo">
      <input
          type="text"
          name="nombreEstudiante"
          placeholder=""
          onChange={handleChange}
          value={form.nombreEstudiante}
        /><span className="barra"></span>
            <label for="">Nombre</label>
            </div>
  
       

            <div className="grupo">
            <input
          type="text"
          name="apellidoEstudiante"
          placeholder=""
          onChange={handleChange}
          value={form.apellidoEstudiante}
        /><span className="barra"></span>
            <label for="">Apellido</label>
            </div>
     

          <div className="grupo">
          <input
          type="text"
          name="actaNacimiento"
          placeholder=""
          onChange={handleChange}
          value={form.actaNacimiento}
        /><span className="barra"></span>
            <label for="">Acta de nacimiento</label>
            </div>
     

           <div className="grupo">
           <input
          type="text"
          name="direccion"
          placeholder=""
          onChange={handleChange}
          value={form.direccion}
        /><span className="barra"></span>
            <label for="">direccion</label>
            </div>
       

       <div className="grupo">
       <input
          type="text"
          name="nombrePadre"
          placeholder=""
          onChange={handleChange}
          value={form.nombrePadre}
        /><span className="barra"></span>
            <label for="">Nombre del Padre</label>
            </div>
       


             <div className="grupo">
             <input
          type="text"
          name="apellidoPadre"
          placeholder=""
          onChange={handleChange}
          value={form.apellidoPadre}
        /><span className="barra"></span>
            <label for="">Apellido del Padre</label>
            </div>
      


             <div className="grupo">
             <input
          type="text"
          name="telefono"
          placeholder="telefono"
          onChange={handleChange}
          value={form.telefono}
        /><span className="barra"></span>
            <label for="">Telefono</label>
            </div>
      


             <div className="grupo">
             <input
          type="text"
          name="cedula"
          placeholder=""
          onChange={handleChange}
          value={form.cedula}
        />
        <span className="barra"></span>
            <label for="">Cedula</label>
            </div>
      
       
        <input
          type="checkbox"
          name="confirmacion"
          id="confirmacion"
          onChange={handleChecked}
          checked={form.confirmacion}
        />
          

        <input
          type="checkbox"
          name="pago"
           id="pago"
          onChange={handleChecked}
          checked={form.pago}
   
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
