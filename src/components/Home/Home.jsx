import React from "react";
import useSWR from "swr";

// Bootstrap components
import { Row, Container } from "react-bootstrap";
// Custom components
import Recipes from "../Recipes/Recipes";
import Slider from "./Slider";
// Config 
import {BASE_URL} from '../utils/config'

const Home = () => {
  const { data: last_recipes } = useSWR(`${BASE_URL}/newest_recipes`);

  const { data: popular_recipes } = useSWR(
    `${BASE_URL}/popular_recipes`
  );

  console.log("popular", popular_recipes);
  console.log("latest", last_recipes);

  return (
    <Container>
      {/* Slider component  */}
      <Row>
        <Slider />
      </Row>
      {/* Latest Recipe Post */}
      <Row className="my-5">
        <div className="mb-3">
          <h3> Last recipes </h3>
        </div>
        <Recipes recipes={last_recipes} />
      </Row>
      {/* Popular Recipes  */}
      <Row>
        <div className="mb-3">
          <h3> Popular recipes </h3>
        </div>
        <Recipes recipes={popular_recipes} />
      </Row>
    </Container>
  );
};

export default Home;
