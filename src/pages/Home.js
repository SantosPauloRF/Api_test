import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { animalContext } from "../utils/Context";
//UI stuff
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { GiClick } from "react-icons/gi";

function Home() {
  const {
    setState,
    dataAnimals,
    search, setSearch,
    setSearchNumber,
    getDataApi
  } = useContext(animalContext);

  const navigate = useNavigate();

  //Filter Logic
  const filteredAnimals = dataAnimals.filter((type) =>
    type.animal_type.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const singleAnimal = (animal) => {

    setState(animal);
    navigate(`/${animal.id}`);

  };

  return (
    <>
      <div className="flex flex-col justify-center p-10">

        <h1 className="text-center mb-5">Api Test for Move</h1>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Choose how many animals to show {1 to 10} "
            onChange={(e) => setSearchNumber(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => getDataApi()}
          >
            Button
          </Button>
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Narrow by type"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
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
                <td>{animal.id}</td>
                <td>{animal.name}</td>
                <td>{animal.diet}</td>
                <td>{animal.animal_type}</td>
                <td>{animal.active_time}</td>
                <td>
                  <GiClick
                    className="cursor-pointer"
                    size={30}
                    onClick={() => singleAnimal(animal)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Home;
