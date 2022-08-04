import React, { useState, useEffect, useContext } from "react";
import CrudContext from "../context/CrudContext";

const initailForm = {
  nombreEstudiante: "",
  apellidoEstudiante: "",
  actaNacimiento:"",
  direccion:"",
  nombrePadre: "",
  apellidoPadre: "",
  telefono: null,
  cedula:null,
  confirmacion: false,
  pago: false,
  idregistro:""
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
        <input
          type="text"
          name="nombreEstudiante"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nombreEstudiante}
        />

       <input
          type="text"
          name="apellidoEstudiante"
          placeholder="Apellido"
          onChange={handleChange}
          value={form.apellidoEstudiante}
        />
         <input
          type="text"
          name="actaNacimiento"
          placeholder="Acta de nacimiento"
          onChange={handleChange}
          value={form.actaNacimiento}
        />
         <input
          type="text"
          name="direccion"
          placeholder="direccion"
          onChange={handleChange}
          value={form.direccion}
        />
         <input
          type="text"
          name="nombrePadre"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nombrePadre}
        />

         <input
          type="text"
          name="apellidoPadre"
          placeholder="Apellido"
          onChange={handleChange}
          value={form.apellidoPadre}
        />
        
        <input
          type="text"
          name="telefono"
          placeholder="telefono"
          onChange={handleChange}
          value={form.telefono}
        />
        
        <input
          type="text"
          name="cedula"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.cedula}
        />
        
        
        <input
          type="checkbox"
          name="confirmacion"
      
          onChange={handleChange}
          value={form.confirmacion}
        />

        <input
          type="checkbox"
          name="pago"
   
          onChange={handleChecked}
          value={form.pago}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
