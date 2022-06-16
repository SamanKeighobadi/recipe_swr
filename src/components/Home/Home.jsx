import React from "react";
import useSWR from "swr";

// Bootstrap components
import { Row, Container } from "react-bootstrap";
// Custom components
import Recipes from "../Recipes/Recipes";
import Slider from "./Slider";
// Config
import { BASE_URL } from "../utils/config";


const Home = () => {
  const { data: last_recipes } = useSWR(`${BASE_URL}/newest_recipes`);

  const { data: popular_recipes } = useSWR(`${BASE_URL}/popular_recipes`);

  return (
    <Container>
      {/* Slider component  */}
      <Row>
        <Slider />
      </Row>
      {/* Latest Recipe Post */}
      <Row className="my-5">
        <div className="mb-3 d-flex align-items-center  align-content-center">
          <h3> Last recipes </h3>
          <div className="mx-2 " style={{ fontSize: "2rem" }}>
            <a
              href="/last_recpies"
              className="text-decoration-none text-secondary"
            >
              &rarr;
            </a>
          </div>
        </div>
        <Recipes recipes={last_recipes} />
      </Row>
      {/* Popular Recipes  */}
      <Row>
        <div className="mb-3 d-flex align-items-center  align-content-center">
          <h3> Popular recipes </h3>
          <div className="mx-2 " style={{ fontSize: "2rem" }}>
            <a href="/popular" className="text-decoration-none text-secondary">
              &rarr;
            </a>
          </div>
        </div>
        <Recipes recipes={popular_recipes} />
      </Row>
    </Container>
  );
};

export default Home;
