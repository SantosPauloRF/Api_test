import React, { useState } from "react"
import Axios from "axios"


function App() {

  const [dataAnimals, setDataAnimals] = useState({})


  const getDataApi = () => {
    // fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    // .then((res) => res.json())
    // .then((data) => {
    //   setDataAnimals(data)
    //   console.log(data)

    // })
    Axios.get("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((res) =>{
      setDataAnimals(res.data)
      console.log(res.data)
    })
  }


  return (
    <div 
      className="flex justify-center p-10"
    >
      <button
        className="border-2 bg-blue-700 text-white hover:bg-blue-300 p-3 transition-all ease-in-out duration-300 shadow-md rounded-lg"
        onClick={() => getDataApi()}
      >
        Push me
      </button>
    </div>
  );
}

export default App;