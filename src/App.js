

import CrudApi from "./components/CrudApi";
import CrudApiU from "./components/CrudApiU";
import CrudApiC from "./components/CrudApiC"
import Contactos from "./components/Contactos"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CrudProvider } from "./context/CrudContext";
import { UserProvider } from "./context/UserContext";
import CrearUsuario from "./components/CrearUsuario"
import Login from "./components/Login";
import Administrador from "./components/Administrador";
import Cliente from "./components/Cliente";
import Pago from "./components/Pago";





function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
         <UserProvider>
         <Login/>
         </UserProvider>
      }/>

<Route path="crear" element={
         <UserProvider>
         <CrearUsuario/>
         </UserProvider>
      }/>

<Route path="administrador" element={
    
         <Administrador/>
     
      }/>

<Route path="cliente" element={
         
         <Cliente/>
        
      }/>

<Route path="administrar" element={
              <UserProvider>
         <CrudProvider>
         <CrudApi/>
         </CrudProvider>
         </UserProvider>
        
      }/>

<Route path="solicitud" element={
         <UserProvider>
         <CrudProvider>
         <CrudApiC/>
         </CrudProvider>
         </UserProvider>
        
      }/>


<Route path="usuarios" element={
         <UserProvider>
         <CrudApiU/>
         </UserProvider>
        
      }/>
<Route path="contacto" element={
      
         <Contactos/>
      
        
      }/>


<Route path="pago" element={
      
      <Pago/>
   
     
   }/>
   
    </Routes>
  </BrowserRouter>
  
   
 
        
  
  );
}

export default App;
