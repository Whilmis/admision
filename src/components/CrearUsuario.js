import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
import "./CrearUsuario.css";

const initailForm = {
    nombre: "",
    apellido: "",
    gmail:"",
    contrasena:"",
    admin: false,
    id: null,
  };
  


const CrearUsuario = () => 
{

    const { createDataU, updateDataU, dataToEditU, setDataToEditU } =
    useContext(UserContext);

  const [form, setForm] = useState(initailForm);
  const [contra, setContra] = useState(initailForm)



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
      [e.target.id]: e.target.value,
    });
  };


 const change = (e) => {
  setContra(e.target.value)
 }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.apellido ||  !form.gmail || !form.contrasena ) {
      alert("Datos incompletos");
      return;
    }

    if ( form.contrasena != contra) {
      alert("Tiene que ser la misma contraseña");
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

    return(
        <div className="loginbody">
        <form onSubmit={handleSubmit}  id="form">
        <div class="form">
            <h1 className="creah1">COMPASS POINT</h1>
            <h4>Sistema de admision</h4>
            <h5>Crear usueario</h5>
            <div className="grupo">
            <input type="text" name="" id="nombre"  onChange={handleChange}  value={form.nombre} required/><span className="barra"></span>
            <label for="">Nombre</label>
            </div>

            <div className="grupo">
            <input type="text" name="" id="apellido"  onChange={handleChange}  value={form.apellido} required/><span className="barra"></span>
            <label for="">apellido</label>
            </div>
            <div class="grupo">
                <input type="email" name="" id="gmail"  onChange={handleChange}  value={form.gmail} required /><span className="barra"></span>
                <label for="">Email</label>
            </div>
            <div class="grupo">
                <input type="password" name="" id="password" onChange={change} value={contra} required /><span className="barra"></span>
                <label for="">Contraseña</label>
            </div>

            <div class="grupo">
                <input type="password" name="" id="contrasena"  onChange={handleChange}  value={form.contrasena} required /><span className="barra"></span>
                <label for="">Confirmar Contraseña</label>
            </div>
              <Link to={"/"} className="log">inicio de sesion</Link>
            <button type="submit">Crear</button>
        </div>
    </form>
    </div>
    );
}


export default CrearUsuario;