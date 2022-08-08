import Headers from "./Headers"
import Inicio from "./Inicio";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const administrador = () =>{
    return(
        <>

<BrowserRouter>
<Headers/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>

       
    </Routes>
  </BrowserRouter>
       
        
        </>
    );

}

export default administrador;