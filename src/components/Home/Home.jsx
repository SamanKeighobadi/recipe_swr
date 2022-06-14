import React from "react";
import Slider from "./Slider";
import useSWR from "swr";
import axios from "axios";
import Loading from "../common/Loading";
// Bootstrap components
import { Row, Container } from "react-bootstrap";
import Recipes from "../Recipes/Recipes";

const Home = () => {
  const fetcher = (...args) => axios.get(args).then((res) => res.data);
  const { data: last_recipes, error } = useSWR(
    "http://localhost:9000/newest_recipes",
    fetcher
  );

  const { data: popular_recipes } = useSWR(
    " http://localhost:9000/popular_recipes",
    fetcher
  );

  console.log("popular", popular_recipes);
  console.log("latest", last_recipes);

  if (error) return <h1>{error.message}</h1>;
  if (!last_recipes || !popular_recipes) return <Loading />;

  return (
    <Container>
     
      <Row>
        <Slider />
      </Row>
      <Row className="my-5">
        <div className="mb-3">
          <h3> Last recipes </h3>
        </div>

        <Recipes recipes={last_recipes} />
      </Row>

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
