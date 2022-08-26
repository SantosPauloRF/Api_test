import { createContext, useState, useEffect } from "react";
import Axios from "axios";

const animalContext = createContext();

const AnimaContextProvider = ({ children }) => {

  const [state, setState] = useState({});
  const [dataAnimals, setDataAnimals] = useState([]);
  const [search, setSearch] = useState("");
  const [searchNumber, setSearchNumber] = useState(10);

  //Rendering data (Simulating component on mount)
  useEffect(() => {
    getDataApi();
  }, []);

  const getDataApi = () => {
    //Validating data
    if (searchNumber <= 0 || searchNumber > 10) {
      return alert("Just numbers between 1 to 10 allowed");
    } else {
      Axios.get(
        `https://zoo-animal-api.herokuapp.com/animals/rand/${searchNumber}`
      ).then((res) => {
        setDataAnimals(res.data);
      });
    }
  };


  return (
    <animalContext.Provider value={{
        state, setState,
        dataAnimals, setDataAnimals,
        search, setSearch,
        searchNumber, setSearchNumber,
        getDataApi
      }}
    >
      {children}
    </animalContext.Provider>
  );
};

export { animalContext, AnimaContextProvider };
