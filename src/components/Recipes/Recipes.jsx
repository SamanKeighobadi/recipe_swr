import React from "react";
import Recipe from "./Recipe";
// Bootstrap components
import { Card, Row, Col } from "react-bootstrap";
// prop types
import PropTypes from "prop-types";

const Recipes = ({ recipes }) => {
  // console.log(recipes);
  return (
    <div>
      <Row>
        {recipes.length > 0 &&
          recipes.slice(0, 3).map((rec) => (
            <Col md={6} sm={12} lg={4} key={rec.id}>
              <Card
                className={"mt-3 overflow-hidden border-3 shadow-md"}
                style={{ height: 170 }}
              >
                <Recipe title={rec.title} date={rec.date} text={rec.text} />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

// PropTypes
Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};

export default Recipes;
