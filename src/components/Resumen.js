import Button from '@mui/material/Button';
import { useModal } from '../hook/useModal';
import './Modal.css'
import { Pie } from 'react-chartjs-2';





const Resumen = ()=>{
  
    const data = {labels:['pagados', 'No Pagasos'],datasets:[{data:[80,20],bacgroundColor:['#0077d1','red']}]};
    const opciones = {responsive: true}
    const handelPrint = ()=>{window.print()};

    const[isOpenModal,openModal,closeModal] = useModal(false);
    return(<div><Button onClick={openModal}>Detalle</Button><div><div className={`modal ${isOpenModal && "is-open"}`}><div className='modal-container'> <h1>Compass Point</h1> <Button onClick={closeModal}>x</Button><hr></hr><div className='info'>
          <Button onClick={handelPrint}>x</Button>
    
        </div></div></div></div></div>);
}


export default Resumen;