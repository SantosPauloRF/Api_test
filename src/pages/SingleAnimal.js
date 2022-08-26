import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { animalContext } from "../utils/Context";
//UI Stuff
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


function SingleAnimal() {
  const navigate = useNavigate();

  const { state } = useContext(animalContext);

  return (
    <div className="flex justify-center p-10">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={state.image_link} />
        <Card.Body>
          <Card.Title>{state.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {state.animal_type}
          </Card.Subtitle>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <span className="font-bold text-blue-700">Active: </span>
            {state.active_time}
          </ListGroup.Item>

          <ListGroup.Item>
            <span className="font-bold text-blue-700">Diet: </span>
            {state.diet}
          </ListGroup.Item>
          
          <ListGroup.Item>
            <span className="font-bold text-blue-700">Habitat: </span>
            {state.habitat}
          </ListGroup.Item>
        </ListGroup>

        <Card.Body>
          <Button variant="primary" onClick={() => navigate("/")}>
            Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleAnimal;
