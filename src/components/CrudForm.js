import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/CrudContext";
import "./CrudForm.css"

const initailForm = {
  id:null,idUsuario:1,nombreEstudiante:"",apellidoEstudiante:"",actaNacimiento:"",direccion:"",nombrePadre:"",apellidoPadre:"",telefono:"",cedula:"",confirmacion:false,pago:false,
};

const CrudForm = () => {
  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(UserContext);

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
      <h3 className="texto">{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>

      <div className="grupo">
      <input
          type="text"
          name="nombreEstudiante"
          placeholder=""
          onChange={handleChange}
          value={form.nombreEstudiante}
        /><label for="name" class="form_label">Nombre del estudiante</label>
        <span class="form__line"></span>
            </div>

            <div className="grupo">
      <input
          type="text"
          name="apellidoEstudiante"
          placeholder=""
          onChange={handleChange}
          value={form.apellidoEstudiante}
        /><label for="name" class="form_label">Apellido del estudiante</label>
        <span class="form__line"></span>
            </div>
  


            <div className="grupo">
      <input
          type="text"
          name="actaNacimiento"
          placeholder=""
          onChange={handleChange}
          value={form.actaNacimiento}
        /><label for="name" class="form_label">Acta de Nacimito</label>
        <span class="form__line"></span>
            </div>
  



            <div className="grupo">
      <input
          type="text"
          name="direccion"
          placeholder=""
          onChange={handleChange}
          value={form.direccion}
        /><label for="name" class="form_label">Direccion</label>
        <span class="form__line"></span>
            </div>
  
  
       

            <div className="grupo">
            <input
          type="text"
          name="nombrePadre"
          placeholder=""
          onChange={handleChange}
          value={form.nombrePadre}
        />  <span className="barra"></span><label for="name" class="form_label">Nombre del Padre </label>
        <span class="form__line"></span>
            </div>
     
          
            
          <div className="grupo">
          <input
          type="text"
          name="apellidoPadre"
          placeholder=""
          onChange={handleChange}
          value={form.apellidoPadre}
        />  <span className="barra"></span><label for="name" class="form_label">Apellido del Padre</label>
        <span class="form__line"></span>
            </div>
     

           <div className="grupo direccion">
           <input
          type="text"
          name="telefono"
          placeholder=""
          onChange={handleChange}
          value={form.telefono}
        />  <span className="barra"></span><label for="name" class="form_label">Telefono</label>
        <span class="form__line"></span>
            </div>

            <div className="grupo direccion">
           <input
          type="text"
          name="cedula"
          placeholder=""
          onChange={handleChange}
          value={form.cedula}
        />  <span className="barra"></span><label for="name" class="form_label">Cedula</label>
        <span class="form__line"></span>
            </div>
       

            <div>
        
        <h4 for="confirmacion" class="textos">Confirmar</h4>
         <input
           type="checkbox"
           name="confirmacion"
           id="confirmacion"
           onChange={handleChecked}
           checked={form.confirmacion}
         />
           </div>

       
      
       <div>
        
       <h4 for="confirmacion" class="textos">Pago</h4>
        <input
          type="checkbox"
          name="pago"
          id="pago"
          onChange={handleChecked}
          checked={form.pago}
        />
          </div>
      <div>
      

</div>
        <input type="submit" value="Enviar" className="enviar"/>
        <input type="reset" value="Limpiar" onClick={handleReset} className="limpiar" />
      </form>
    </div>
  );
};

export default CrudForm;
