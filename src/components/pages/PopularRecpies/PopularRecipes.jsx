
import React from "react";
import useSWR from "swr";
// Bootstrap components
import { Card, Col, Row } from "react-bootstrap";
// Config
import {BASE_URL} from '../../utils/config'

const PopularRecipes = () => {
  
  const { data } = useSWR(`${BASE_URL}/newest_recipes`);

  return (
    <div>
      <Row className="my-5 px-4">
        {data.length > 0 &&
          data.map((rec) => (
            <Col md={6} sm={12} lg={4} key={rec.id} className="my-2">
              <Card>
                <Card.Header className="">{rec.title}</Card.Header>
                <Card.Body className="d-flex justify-content-center  flex-column">
                  <Card.Text>{rec.text}</Card.Text>
                  <Card.Subtitle>{rec.date}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default PopularRecipes;
