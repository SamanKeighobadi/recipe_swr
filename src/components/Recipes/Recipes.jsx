import React from "react";
import Recipe from "./Recipe";
// Bootstrap components
import { Card, Row, Col } from "react-bootstrap";

const Recipes = ({recipes}) => {
  
  // console.log(recipes);
  return (
    <div>
      <Row>
        {recipes.length > 0 &&
          recipes.slice(0,3).map((rec) => (
            <Col md={6} sm={12} lg={4} key={rec.id} >
              <Card  className={'mt-3 overflow-hidden border-3 shadow-md'}  style={{ height: 200 }}>
                <Recipe title={rec.title} date={rec.date} text={rec.text} />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Recipes;
