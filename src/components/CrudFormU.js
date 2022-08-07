import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import "./CrudForm.css"

const initailForm = {
  nombre: "",
  apellido: "",
  gmail:"",
  contrasena:"",
  admin: false,
  id: null,
};

const CrudFormU = () => {
  const { createDataU, updateDataU, dataToEditU, setDataToEditU } =
    useContext(UserContext);

  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEditU) {
      setForm(dataToEditU);
    } else {
      setForm(initailForm);
    }
  }, [dataToEditU]);

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

    if (!form.nombre || !form.apellido) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createDataU(form);
    } else {
      updateDataU(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEditU(null);
  };

  return (
    <div>
      <h3 className="texto">{dataToEditU ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>

      <div className="grupo">
      <input
          type="text"
          name="nombre"
          placeholder=""
          onChange={handleChange}
          value={form.nombre}
        /><label for="name" class="form_label">Nombre</label>
        <span class="form__line"></span>
            </div>
  
       

            <div className="grupo">
            <input
          type="text"
          name="apellido"
          placeholder=""
          onChange={handleChange}
          value={form.apellido}
        />  <span className="barra"></span><label for="name" class="form_label">Apellido </label>
        <span class="form__line"></span>
            </div>
     
          
            
          <div className="grupo">
          <input
          type="email"
          name="gmail"
          placeholder=""
          onChange={handleChange}
          value={form.gmail}
        />  <span className="barra"></span><label for="name" class="form_label">Gmail</label>
        <span class="form__line"></span>
            </div>
     

           <div className="grupo direccion">
           <input
          type="password"
          name="contrasena"
          placeholder=""
          onChange={handleChange}
          value={form.contrasena}
        />  <span className="barra"></span><label for="name" class="form_label">Contraseña</label>
        <span class="form__line"></span>
            </div>
       

       
      
       <div>
        
       <h4 for="confirmacion" class="textos">Admin</h4>
        <input
          type="checkbox"
          name="admin"
          id="admin"
          onChange={handleChecked}
          checked={form.admin}
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

export default CrudFormU;
