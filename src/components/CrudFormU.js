import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
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
      <Box
      sx={{
        '& .MuiTextField-root': { m: 3, width: '30ch',alignContent: "center" },
      }}
      noValidate
      autoComplete="off"
    >
            <TextField
        id="filled-multiline-flexible"
        label="Nombre"
        value={form.nombre}
        name="nombre"
        onChange={handleChange}
        
      />
            <TextField
        id="outlined-name"
        label="Apellido"
        value={form.apellido}
        name="apellido"
        onChange={handleChange}
        
      />
            <TextField
        id="outlined-name"
        label="Gmail"
        type="email"
        value={form.gmail}
        name="gmail"
        onChange={handleChange}
        
      />    
            <TextField
        id="outlined-name"
        label="Contraseña"
        value={form.direccion}
        type="password"
        name="contrasena"
        onChange={handleChange}

      />
  
<div className="check">
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
      
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button type="submit">Enviar</Button>
      <Button onClick={handleReset}>Reset</Button>
    </ButtonGroup>
</div>
      </Box>
    
      </form>
    </div>
  );
};

export default CrudFormU;
