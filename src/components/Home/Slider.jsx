import React from "react";
import useSWR from "swr";
// Bootstrap components
import { Carousel, Container } from "react-bootstrap";

const Slider = () => {
  const { data: sliders } = useSWR("http://localhost:9000/slider");

  return (
    <Container>
      <Carousel style={{ height: 400 }}>
        {sliders.length > 0 &&
          sliders.map((slider) => (
            <Carousel.Item key={slider.id} style={{ height: 400 }}>
              <img
                className="d-block w-100 h-100"
                src={slider.img}
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
