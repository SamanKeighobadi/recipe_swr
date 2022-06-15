import React from "react";
import { Card } from "react-bootstrap";
// Prop types
import PropTypes from 'prop-types';

const Recipe = ({text,date,title}) => {
    // console.log(props);
  return (
    <div >
      <Card.Header className="">{title}</Card.Header>
      <Card.Body  className="d-flex justify-content-center  flex-column" >
        <Card.Text  >{text}</Card.Text>
      <Card.Subtitle>{date}</Card.Subtitle>
      </Card.Body>
    </div>
  );
};

// PropTypes
Recipe.propTypes ={
  text:PropTypes.string,
  title:PropTypes.string,
  date:PropTypes.string
}

export default Recipe;
