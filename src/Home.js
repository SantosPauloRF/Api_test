import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { GiClick } from "react-icons/gi";
import { animalContext } from "./Context"
import Axios from "axios"



function Home() {

  const [dataAnimals, setDataAnimals] = useState([])
  const [search, setSearch] = useState("")
  const { setState } = useContext(animalContext)
  const navigate = useNavigate()
  const [searchNumber, setSearchNumber] = useState(10)

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
    if (searchNumber <= 0 || searchNumber >10){
        return alert("Just numbers between 1 to 10 allowed")
        
    } else {
        
        Axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand/${searchNumber}`)
        .then((res) =>{
          setDataAnimals(res.data)
    
        })
    }
  }
  
  const singleAnimal = (id, name, diet, type, time, image, habitat) => {

    setState({
        id: id,
        active_time: time,
        animal_type: type,
        diet: diet,
        name: name,
        image_link:image,
        habitat: habitat
    })

    navigate(`/${id}`)

  }

 


  return (
    <>
    <div 
      className="flex flex-col justify-center p-10"
      >
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Choose how many animals to show {1 to 10} "
          onChange={(e) => setSearchNumber(e.target.value)}
          
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={() => getDataApi()}>
          Button
        </Button>
      </InputGroup>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Narrow by type"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          
        />
        
      </InputGroup>
      

      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Animal Name</th>
            <th>Diet</th>
            <th>Type</th>
            <th>Time</th>
            <th>Show</th>
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
             <td >
              <GiClick 
                className='cursor-pointer'
                size={30}
                onClick={() => singleAnimal(animal.id, animal.name, animal.diet, animal.animal_type, animal.active_time, animal.image_link, animal.habitat)}
              />
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
    </>
  );
}

export default Home;