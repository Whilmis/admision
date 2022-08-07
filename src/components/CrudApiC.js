import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudFormC from "./CrudFormC";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import HeadersC from "./HeadersC";


const CrudApiC = () => {
  const { db, loading, error } = useContext(CrudContext);

  return (
    <>
    <HeadersC/>
      
      <article className="grid-1-2">
        <CrudFormC />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable />}
      </article>
    </>
  );
};

export default CrudApiC;
