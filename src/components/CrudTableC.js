import React, { useContext, useEffect, useState} from "react";
import CrudContext from "../context/CrudContext";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AppWidgetSummary from './AppWidgetSummary'
import ButtonM from "./ButtonM";
import { Grid, Container, Typography } from '@mui/material';




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



const CrudTableC = () => {
  const fileName = "compass-point";
  const [dataAPI, setData] = React.useState([])
  



  const { db: data,setDataToEdit, deleteData } = useContext(CrudContext);
  let newData = data.filter((el) => el.idUsuario == 5);
  let newData2 = data.filter((el) => el.confirmacion )
  return (
    <div>
    <hr></hr>
             
     
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
          {newData.map((el) => (
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
};

export default CrudTableC;
