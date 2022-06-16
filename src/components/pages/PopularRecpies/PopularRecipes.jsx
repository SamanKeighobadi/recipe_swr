import React, { useState } from "react";
import useSWR from "swr";
// Bootstrap components
import { Card, Col, Row, Pagination } from "react-bootstrap";
// Config
import { BASE_URL } from "../../utils/config";
// img
import img from '../../assets/images/img2.jpg'

const PopularRecipes = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = useSWR(
    `${BASE_URL}/newest_recipes?_page=${pageIndex}&_limit=10`
  );

  return (
    <div>
      <Row className="my-5 px-4">
        <h1 className="mb-2">Popular Recipes</h1>
        {data.length > 0 &&
          data.map((rec) => (
            <Col md={6} sm={12} lg={4} key={rec.id} className="my-2">
              <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className="d-flex justify-content-center  flex-column">
                  <Card.Title>{rec.title}</Card.Title>
                  <Card.Text>{rec.text.slice(0, 50)}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Subtitle>{rec.date}</Card.Subtitle>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        <Pagination>
          <Pagination.Prev onClick={() => setPageIndex(pageIndex - 1)} />

          <Pagination.Next onClick={() => setPageIndex(pageIndex + 1)} />
        </Pagination>
      </Row>
    </div>
  );
};

export default PopularRecipes;
