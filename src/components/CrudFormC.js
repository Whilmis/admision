
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/CrudContext";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./CrudForm.css"

const initailForm = {
  id:null,idUsuario:5,nombreEstudiante:"",apellidoEstudiante:"",actaNacimiento:"",direccion:"",nombrePadre:"",apellidoPadre:"",telefono:"",cedula:"",curso:"", documentoP:"", confirmacion:false, pago:false
};


const CrudFormC = () => {
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

      <Box
      
      sx={{
        '& .MuiTextField-root': { m: 3, width: '30ch',alignContent: "center" },
      }}
      noValidate
      autoComplete="off"
    >

            <TextField
        id="filled-multiline-flexible"
        label="Nombre del estudiante"
        value={form.nombreEstudiante}
        name="nombreEstudiante"
        onChange={handleChange}
        
      />

       
  
            <TextField
        id="outlined-name"
        label="Apellido del estudiante"
        value={form.apellidoEstudiante}
        name="apellidoEstudiante"
        onChange={handleChange}
        
      />

         

            <TextField
        id="outlined-name"
        label="Acta de Nacimito"
        value={form.actaNacimiento}
        name="actaNacimiento"
        onChange={handleChange}
        
      />
  



            
            <TextField
        id="outlined-name"
        label="Direccion"
        multiline
          rows={4}
        value={form.direccion}
        name="direccion"
        onChange={handleChange}
        
      />
  
       

            
            
            <TextField
        id="outlined-name"
        label="Nombre del Padre"
        value={form.nombrePadre}
        name="nombrePadre"
        onChange={handleChange}
        
      />
          
            
          
             
            <TextField
        id="outlined-name"
        label="Apellido del Padre"
        value={form.apellidoPadre}
        name="apellidoPadre"
        onChange={handleChange}
        
      />

           
            <TextField
        id="outlined-name"
        label="Telefono"
        value={form.telefono}
        name="telefono"
        onChange={handleChange}
        
      />
            
         
            <TextField
        id="outlined-name"
        label="Cedula"
        value={form.cedula}
        name="cedula"
        onChange={handleChange}
        
      />
      <TextField
        id="outlined-name"
        label="Documento Personal"
        value={form.documentoP}
        name="documentoP"
        onChange={handleChange}
        
      />
       <select name="curso" value={form.curso}  onChange={handleChange}>
        <option value=''>-------</option>
        <option value='Maternal'>Maternal</option>
        <option value='Kinder'>Kínder</option>
        <option value='Pre-Primaria'>Pre-Primaria</option>
       
       </select>

<div className="check">
     
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

export default CrudFormC;