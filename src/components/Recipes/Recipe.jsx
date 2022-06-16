import React from "react";
import { Card } from "react-bootstrap";
// Prop types
import PropTypes from "prop-types";

const Recipe = ({ text, date, title }) => {
  return (
    <div>
      <Card.Body className="d-flex justify-content-center  flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text.slice(0, 100)}</Card.Text>
        <Card.Subtitle>{date}</Card.Subtitle>
      </Card.Body>
    </div>
  );
};

// PropTypes
Recipe.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

export default Recipe;
