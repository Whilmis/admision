import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudForm from "./CrudForm";

import Loader from "./Loader";
import Message from "./Message";
import Headers from "./Headers";
import CrudtableM from "./CrudTableM";


const CrudApi = () => {
  const { db, loading, error } = useContext(CrudContext);

  return (
    <>
    <Headers/>
      
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudtableM />}
      </article>
    </>
  );
};

export default CrudApi;
