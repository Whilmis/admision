import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [dbU, setDbU] = useState(null);
  const [actualU, setActualU] = useState(5);
  const [dataToEditU, setDataToEditU] = useState(null);
  const [errorU, setErrorU] = useState(null);
  const [loadingU, setLoadingU] = useState(false);

  let api = helpHttp();
  let url = "https://compasspoint.herokuapp.com/api/v1/users";

  useEffect(() => {
    setLoadingU(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDbU(res);
          setErrorU(null);
        } else {
          setDbU(null);
          setErrorU(res);
        }
        setLoadingU(false);
      });
  }, [url]);


 const actualisaActual = (data) =>
 {
  setActualU(data);
 }

  const createDataU = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDbU([...dbU, res]);
      } else {
        setErrorU(res);
      }
    });
  };

  const updateDataU = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = dbU.map((el) => (el.id === data.id ? data : el));
        setDbU(newData);
      } else {
        setErrorU(res);
      }
    });
  };

  const deleteDataU = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = dbU.filter((el) => el.id !== id);
          setDbU(newData);
        } else {
          setErrorU(res);
        }
      });
    } else {
      return;
    }
  };

  const data = {
    dbU,
    errorU,
    loadingU,
    createDataU,
    dataToEditU,
    setDataToEditU,
    updateDataU,
    deleteDataU,
    setActualU,
    actualU,
    actualisaActual
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
