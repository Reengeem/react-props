import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  goals,
  image,
}) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
    >
      <Card.Img variant="top" src={`${image}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Age: {age}</Card.Text>

        <Card.Text>Team: {team}</Card.Text>

        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        {/* <Card.Text>Goals: {goals}</Card.Text> */}

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

Player.proptypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  goals: PropTypes.number,
  image: PropTypes.string,
};

export default Player;
