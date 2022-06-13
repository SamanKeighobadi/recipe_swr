import React from "react";
import { Card } from "react-bootstrap";

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

export default Recipe;
