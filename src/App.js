import React, { useState } from "react"
import Table from 'react-bootstrap/Table';
import Axios from "axios"


function App() {

  const [dataAnimals, setDataAnimals] = useState([])


  const getDataApi = () => {
    // fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    // .then((res) => res.json())
    // .then((data) => {
    //   setDataAnimals(data)
    //   console.log(data)

    // })
    Axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then((res) =>{
      setDataAnimals(res.data)
      console.log(res.data)
    })
  }
  


  return (
    <div 
      className="flex flex-col justify-center p-10"
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Animal Name</th>
            <th>Diet</th>
            <th>Type</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {dataAnimals.map((animal) => (
            <tr key={animal.id}>
             <td >
              {animal.id}
             </td> 
             <td >
              {animal.name}
             </td> 
             <td >
              {animal.diet}
             </td> 
             <td >
              {animal.animal_type}
             </td> 
             <td >
              {animal.active_time}
             </td> 
            </tr>
          ))}
          
          

          
          
          
          
        </tbody>
      </Table>
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