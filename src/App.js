

/*import CrudApi from "./components/CrudApi";*/
/*import CrudApiU from "./components/CrudApiU";*/
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import CrearUsuario from "./components/CrearUsuario"
import Login from "./components/Login";
import Administrador from "./components/Administrador";





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
         <UserProvider>
         <CrearUsuario/>
         </UserProvider>
      }/>
   
    </Routes>
  </BrowserRouter>
  
   
 
        
  
  );
}

export default App;
