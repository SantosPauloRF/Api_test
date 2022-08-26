import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { animalContext } from "./Context"

function SingleAnimal() {

    const { state } = useContext(animalContext)
    
  return (
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
            <tr key={state.id}>
             <td >
              {state.id}
             </td> 
             <td >
              {state.name}
             </td> 
             <td >
              {state.diet}
             </td> 
             <td >
              {state.animal_type}
             </td> 
             <td >
              {state.active_time}
             </td> 
             
            </tr>
          

        </tbody>
      </Table>
  )
}

export default SingleAnimal