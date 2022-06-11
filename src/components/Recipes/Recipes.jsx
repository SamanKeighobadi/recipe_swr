import React from "react";
import { Row, Col } from "react-bootstrap";
import Recipe from "./Recipe";

const Recipes = () => {
  const recpies = [
    {
      id: 1,
      title: "recipe one",
      description:
        "Labore sunt dolore mollit do est non laboris ex eiusmod. Duis quis cillum reprehenderit fugiat ullamco magna velit labore. Eiusmod sint enim qui minim dolore tempor sint qui. Quis ex non mollit sunt aute non et excepteur id velit. Fugiat qui esse cillum eiusmod enim commodo anim sit. Nostrud irure duis nisi elit irure deserunt nostrud et ex.",
      img: "",
    },
    {
      id: 2,
      title: "recipe one",
      description:
        "Labore sunt dolore mollit do est non laboris ex eiusmod. Duis quis cillum reprehenderit fugiat ullamco magna velit labore. Eiusmod sint enim qui minim dolore tempor sint qui. Quis ex non mollit sunt aute non et excepteur id velit. Fugiat qui esse cillum eiusmod enim commodo anim sit. Nostrud irure duis nisi elit irure deserunt nostrud et ex.",
      img: "",
    },
    {
      id: 3,
      title: "recipe one",
      description:
        "Labore sunt dolore mollit do est non laboris ex eiusmod. Duis quis cillum reprehenderit fugiat ullamco magna velit labore. Eiusmod sint enim qui minim dolore tempor sint qui. Quis ex non mollit sunt aute non et excepteur id velit. Fugiat qui esse cillum eiusmod enim commodo anim sit. Nostrud irure duis nisi elit irure deserunt nostrud et ex.",
      img: "",
    },
  ];

  return (
    <div>
      {recpies.map((recpie) => (
        <div key={recpie.id}>
          <Recipe
            title={recpie.title}
            desc={recpie.description}
            img={recpie.img}
          />
        </div>
      ))}
    </div>
  );
};

export default Recipes;
