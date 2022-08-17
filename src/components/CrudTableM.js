import  React, { useContext, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CrudContext from "../context/CrudContext";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AppWidgetSummary from './AppWidgetSummary'
import Busqueda from "./Busqueda";
import axios from "axios";
import {ExportToExcel} from './exportToExcel'
import { Grid, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import PageviewIcon from '@mui/icons-material/Pageview';
import "./CrudTable.css"
import ButtonM from './ButtonM';
import Resumen from './Resumen';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0077d1",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export default function CrudtableM() {
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
    let { db: data,setDataToEdit, deleteData } = useContext(CrudContext);
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
    <div className='contenedor'>
    <hr></hr>
             
      <div className='buscar'>
      <Grid container spacing={4}   justifyContent="center"
  alignItems="center">
      <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total de solicitudes" total={data.length} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title=" Solitudes pagadas" total={newData.length} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Solitudes Confimadas" total={newData2.length} color="info" icon={'ant-design:windows-filled'} />
          </Grid>

          
          </Grid>

          </div>
          <h3>Tabla de Datos</h3>
          <form id="formt" onSubmit={handleSubmit}>

<div className="buscar">

  <div className='belemento'>
  <TextField
          id="standard-search"
          label="Buscar por nombre"
          type="search"
          name="nombreEstudiante"
          onChange={handleChange}
          value={nombre}
          variant="standard"
        />
      <PageviewIcon color="primary" fontSize="large"/>
      </div>
     
      </div>

     
      </form>
      <div className='belemento'>
        <Resumen/>
        
        <ExportToExcel apiData={dataAPI} fileName={fileName} />
        </div>
         
    <TableContainer component={Paper} color="primary">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre del Estudiante</StyledTableCell>
            <StyledTableCell align="right">Nombre del Padre</StyledTableCell>
            <StyledTableCell align="right">Pago</StyledTableCell>
            <StyledTableCell align="right">Confirmacion</StyledTableCell>
            <StyledTableCell align="right">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { form? (
            dataf.map((el) =>(
              <StyledTableRow key={el.id}>
                <StyledTableCell component="th" scope="row">
                  {el.nombreEstudiante+ " "+ el.apellidoEstudiante}
                </StyledTableCell>
                <StyledTableCell align="right">{el.nombrePadre+ " "+ el.apellidoPadre}</StyledTableCell>
                <StyledTableCell align="right">{el.pago? "Realizado":"No realizado"}</StyledTableCell>
                <StyledTableCell align="right">{el.confirmacion? "Confirmado":"No Confirmado"}</StyledTableCell>
                <StyledTableCell align="right">{
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => deleteData(el.id)}>Eliminar</Button>
                    <Button onClick={() => setDataToEdit(el)}>Editar</Button>
                    <ButtonM el={el}/>
                 
                  </ButtonGroup>
                }</StyledTableCell>
              </StyledTableRow>
            ))
          ) : 
          data.map((el) => (
            <StyledTableRow key={el.id}>
              <StyledTableCell component="th" scope="row">
                {el.nombreEstudiante+ " "+ el.apellidoEstudiante}
              </StyledTableCell>
              <StyledTableCell align="right">{el.nombrePadre+ " "+ el.apellidoPadre}</StyledTableCell>
              <StyledTableCell align="right">{el.pago? "Realizado":"No realizado"}</StyledTableCell>
              <StyledTableCell align="right">{el.confirmacion? "Confirmado":"No Confirmado"}</StyledTableCell>
              <StyledTableCell align="right">{
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button onClick={() => deleteData(el.id)}>Eliminar</Button>
                  <Button onClick={() => setDataToEdit(el)}>Editar</Button>
                  <ButtonM el={el}/>
                </ButtonGroup>
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
