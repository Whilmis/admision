import   { useContext } from 'react';
import Button from '@mui/material/Button';
import { useModal } from '../hook/useModal';
import AppWidgetSummary from './AppWidgetSummary'
import { Grid } from '@mui/material';
import CrudContext from "../context/CrudContext";
import './Modal.css'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';






const Resumen = ()=>{
    let { db: data } = useContext(CrudContext);
    let newData = data.filter((el) => el.pago )
    let newData2 = data.filter((el) => el.confirmacion )
    let newData3 = data.filter((el) => el.curso == "Maternal" )
    let newData4 = data.filter((el) => el.curso == "Kínder" )
    let newData5 = data.filter((el) => el.curso == "Pre-Primaria" )
    


    const handelPrint = ()=>{window.print()};

    const[isOpenModal,openModal,closeModal] = useModal(false);
    return(<div><Button onClick={openModal}>Resumen</Button><div onClick={closeModal}><div className={`modal ${isOpenModal && "is-open"}`}><div className='modal-container'> <h1 className='h1'>Compass Point</h1>  <div onClick={handelPrint}><PictureAsPdfIcon color="primary"/> </div><hr></hr><div className='info'>
        

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
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Cupo para Maternal" total={15 - newData3.length } color="info" icon={'ant-design:windows-filled'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Cupo Para Kinder" total={15 - newData4.length} color="info" icon={'ant-design:windows-filled'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Cupo Para Pre-Primario" total={15- newData5.length} color="info" icon={'ant-design:windows-filled'} />
          </Grid>

          
          </Grid>
   

          
          
    
        </div></div></div></div></div>);
}


export default Resumen;