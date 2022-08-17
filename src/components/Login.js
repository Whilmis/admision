import * as React from 'react';
import {  useNavigate  } from "react-router-dom";
import  {  useState, useContext } from "react";
import UserContext from "../context/UserContext";
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
  
  gmail:"",
  contrasena:"",


};



export default function Login() {
  let navigate = useNavigate();
  const { dbU: data, actualisaActual,actualU } = useContext(UserContext);
  const [form, setForm] = useState(initailForm);

  const handleSubmit = () =>{
      data.forEach(element => {
          if(element.gmail === form.gmail){
              if(element.contrasena === form.contrasena){
                  
                  if( element.admin == "true"){
                      navigate("administrador")
                  }
                  else{
                      navigate("cliente");
                  }
                    
                 
              }

          }
          
      });
    
  }

  const handleChange = (e) => {
      setForm({ 
        ...form,
        [e.target.id]: e.target.value,
      });
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
            backgroundImage: 'url(https://images.pexels.com/photos/8466903/pexels-photo-8466903.jpeg)',
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
            <Typography component="h2" variant="h5" color="primary">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                defaultValue={form.gmail} 
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
              onChange={ (e) => {
                setForm({ 
                  ...form,
                  contrasena: e.target.value,
                });
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
          
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, w:6 }}
              >
                entrar
              </Button>
              <Grid container>
              
                <Grid item>
                  <Link href="crear" variant="body2">
                    {"No tienes cuenta? click aqui"}
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