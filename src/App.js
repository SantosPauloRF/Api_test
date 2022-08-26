import React, { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Axios from "axios"


function App() {

  const [dataAnimals, setDataAnimals] = useState([])
  const [search, setSearch] = useState("")

  const filteredAnimals = dataAnimals.filter((type) => type.animal_type.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() =>{
    getDataApi()

  }, [])

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
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Narrow by type"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
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
          {filteredAnimals.map((animal) => (
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