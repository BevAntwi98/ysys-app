import React from "react";
import "./Card.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";


// TODO - create a component which displays information about Characters

// TODO - make sure CharacterCard is expecting the right props!

export const CharacterCard = ({ character }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>{character.titles}</Card.Text>
      </Card.Body>
      <CardGroup>
        
        <ListGroup className="list-group-flush" variant="flush">
          <ListGroup.Item>{character.gender}</ListGroup.Item>
          <ListGroup.Item>{character.born}</ListGroup.Item>
          <ListGroup.Item>{character.culture}</ListGroup.Item>
        </ListGroup>
      </CardGroup>
    </Card>
  );
};
