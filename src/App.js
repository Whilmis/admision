

import CrudApi from "./components/CrudApi";
import { CrudProvider } from "./context/CrudContext";
/*import {UserProvider} from "./context/UserContex"*/

function App() {
  return (
  

       <CrudProvider>
     
        <CrudApi/>
      
      </CrudProvider>
  
  );
}

export default App;
