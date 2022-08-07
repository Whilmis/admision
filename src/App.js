

/*import CrudApi from "./components/CrudApi";*/
import CrudApiU from "./components/CrudApiU";
/*import { CrudProvider } from "./context/CrudContext";*/
import {UserProvider} from "./context/UserContext"

function App() {
  return (
  <UserProvider>
  <CrudApiU/>
  </UserProvider>
 
  );
}

export default App;
