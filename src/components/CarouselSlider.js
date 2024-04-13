import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Spinner from "./Spinner";

const CarouselSlide = () => {
  const carouselService = [
    {
      id: 1,
      image: "../assets/images/Segreteria.jpg",
      label: "Segreteria",
      link: "/Contatti",
    },
    {
      id: 2,
      image: "../assets/images/Servizi.jpg",
      label: "Servizi",
      link: "/Servizi",
    },
    {
      id: 3,
      image: "../assets/images/Allenamenti.jpg",
      label: "Programmi",
      link: "/Servizi",
    },
    {
      id: 4,
      image: "../assets/images/Promozioni.jpeg",
      label: "Promozioni",
      link: "/Servizi",
    },
  ];

const [load, setLoad] = useState(false)





  return (
    <>
    <Container>
   { carouselService.length <= 1 && (<Carousel indicators={false} controls={false}>
      {carouselService.map((item, index) => (
        <Carousel.Item key={index}>
          <Link to={item.link}>
            <div className="dim"
              style={{ backgroundImage: `url(${item.image})` }} />
          </Link>
          <Carousel.Caption>
            <h3>{item.label}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>)}

        {carouselService.length >= 1 && (<Carousel>
          {carouselService.map((item, index) => (
            <Carousel.Item key={index}>
              <Link to={item.link}>
                <div className="dim" style={{ backgroundImage: `url(${item.image})` }} />
              </Link>
              <Carousel.Caption>
                <h3>{item.label}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>)}

    {carouselService.length <= 0 && (<Spinner/>) }
</Container>
</>
  )};

export default CarouselSlide;

const Container = styled.div``;