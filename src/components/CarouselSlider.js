import React from "react";
import Carousel from "react-bootstrap/Carousel";


const CarouselSlide = () => {

    const carouselService = [
      {
        id: 1,
        image: "../assets/images/Segreteria.jpg",
        label: "Segreteria",
      },
      {
        id: 2,
        image: "../assets/images/Servizi.jpg",
        label: "Servizi",
      },
      {
        id: 3,
        image: "../assets/images/Allenamenti.jpg",
        label: "Programmi",
      },
      {
        id: 4,
        image: "../assets/images/Promozioni.jpeg",
        label: "Promozioni",
      },
    ];




    return carouselService.length <= 1 ? (
      <Carousel indicators={false} controls={false}>
        {carouselService.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="dim" src={item.image} alt={item.label} />
            <Carousel.Caption>
              <h3>{item.label}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    ) : (
      <Carousel>
        {carouselService.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="dim" src={item.image} alt={item.label} />
            <Carousel.Caption>
              <h3>{item.label}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
}


export default CarouselSlide