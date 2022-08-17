import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
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

const CrudTableU = () => {

  const { dbU: data,setDataToEditU, deleteDataU } = useContext(UserContext);

  return (

    <div>
    <hr></hr>
             
     
      <Grid container spacing={4}   justifyContent="center"
  alignItems="center">
      <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total de solicitudes" total={data.length} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title=" Solitudes pagadas" total={data.length} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          

          
          </Grid>

     

      
    <TableContainer component={Paper} color="primary">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre </StyledTableCell>
            <StyledTableCell align="right">Gmail</StyledTableCell>
            <StyledTableCell align="right">Contraseña</StyledTableCell>
            <StyledTableCell align="right">Admin</StyledTableCell>
            <StyledTableCell align="right">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el) => (
            <StyledTableRow key={el.id}>
              <StyledTableCell component="th" scope="row">
                {el.nombre+ " "+ el.apellido}
              </StyledTableCell>
              <StyledTableCell align="right">{el.gmail}</StyledTableCell>
              <StyledTableCell align="right">{el.contrasena}</StyledTableCell>
              <StyledTableCell align="right">{el.admin? "Confirmado":"No Confirmado"}</StyledTableCell>
              <StyledTableCell align="right">{
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button onClick={() => deleteDataU(el.id)}>Eliminar</Button>
                  <Button onClick={() => setDataToEditU(el)}>Editar</Button>
                </ButtonGroup>
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default CrudTableU;