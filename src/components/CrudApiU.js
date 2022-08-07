import { useContext } from "react";
import UserContext from "../context/UserContext"
import CrudFormU from "./CrudFormU";
import Loader from "./Loader";
import Message from "./Message";
import Headers from "./Headers";
import CrudTableU from "./CrudTableU";


const CrudApiU = () => {
  const { dbU, loadingU, errorU } = useContext(UserContext);

  return (
    <>
    <Headers/>
      
      <article className="grid-1-2">
        <CrudFormU />
        {loadingU && <Loader />}
        {errorU && (
          <Message
            msg={`Error ${errorU.status}: ${errorU.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {dbU && <CrudTableU />}
      </article>
    </>
  );
};

export default CrudApiU;
