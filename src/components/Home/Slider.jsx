import axios from "axios";
import React from "react";
import useSWR from "swr";
import Loading from "../common/Loading";
import { Carousel,Container } from "react-bootstrap";

const Slider = () => {

  const fetcher = (...args) => axios.get(args).then((res) => res.data);
  const { data: sliders, error } = useSWR(
    "http://localhost:9000/slider",
    fetcher,
    {}
  );
  // console.log(sliders);
  if (error) return <h1>{error.message}</h1>;
  if (!sliders) return <Loading />;

  return (
    <Container>
      <Carousel style={{height:400}}>
        {sliders.length > 0 &&
          sliders.map((slider) => (
            <Carousel.Item key={slider.id} style={{height:400}} >
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
