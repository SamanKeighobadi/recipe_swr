import React from "react";
import useSWR from "swr";
// Bootstrap components
import { Carousel, Container } from "react-bootstrap";
// Config
import { BASE_URL } from "../utils/config";
// images
import img from "../assets/images/slider3.jpg";

const Slider = () => {
  const { data: sliders } = useSWR(`${BASE_URL}/slider`);

  return (
    <Container>
      <Carousel style={{ height: 400 }}>
        {sliders.length > 0 &&
          sliders.map((slider) => (
            <Carousel.Item key={slider.id} style={{ height: 400 }}>
              <img
                className="d-block w-100 h-100"
                src={img}
                alt={slider.title}
              />
              <Carousel.Caption>
                <h3>{slider.title}</h3>
                <p>{slider.slug}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </Container>
  );
};

export default Slider;
