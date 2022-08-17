import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
/*import { Link } from "react-router-dom";*/
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Whilmis">
        Whilmis Perez | Richard Hernandez
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


const initailForm = {
  nombre: "",
  apellido: "",
  gmail:"",
  contrasena:"",
  admin: false,
  id: null,
};




export default function CrearUsuario() {
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


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.pexels.com/photos/8466901/pexels-photo-8466901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Compass Point
            </Typography>
            <Typography component="h5" variant="h6" color="primary">
              Crear usuario
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => {
                  setForm({ 
                    ...form,
                    nombre: e.target.value,
                  });
                }}
                id="name"
                label="Nombre"
                name="name"
              
                autoFocus
              />
                   <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => {
                  setForm({ 
                    ...form,
                    apellido: e.target.value,
                  });
                }}
                id="apellido"
                label="Apellido"
                name="name"
                
                autoFocus
              />
                   <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => {
                  setForm({ 
                    ...form,
                    gmail: e.target.value,
                  });
                }}
                id="email"
                label="Gmail"
                name="email"
                autoComplete="email"
                autoFocus
              />
             
              <TextField
                onChange={(e) => {
                  setContra(e.target.value)
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />

<TextField
                  onChange={(e) => {
                    setForm({ 
                      ...form,
                      contrasena: e.target.value,
                    });
                  }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirmar Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Crear
              </Button>
              <Grid container>
              
                <Grid item>
                  <Link href="/" variant="body2">
                    {"Login"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}