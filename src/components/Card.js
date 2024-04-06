import React from "react";
import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ServiziCard = ({ servizi }) => {


  return (
    <Contenitore>
      {servizi.map((servizio, index) => (
        <Card key={index}>
          <Card.Img src={servizio.image} />
          <Card.Body>
            <Card.Title>{servizio.nome}</Card.Title>
            <Card.Text>Durata: {servizio.durata}</Card.Text>
            <Card.Text>Fascia Oraria: {servizio.fascia_oraria}</Card.Text>

            {servizio.giorni.map((giorno, value) => (
              <Card.Text key={value}> {giorno} </Card.Text>
            ))}

                  <Button variant="primary">{servizio.bottone}</Button>
          </Card.Body>
        </Card>
      ))}
    </Contenitore>
  );
};

const Contenitore = styled.div`
  background-color: white;

  .card {
    display: block;
    width: 30%;
    margin-left: 2.5%;
    margin-bottom: 20px;
    float: left;

    .card-body {
      .card-title {
        font-size: 25px;
        font-family: "Poppins", sans-serif !important;
        font-weight: 600 !important;
        text-align: center;
      }
      .card-text {
        margin: 5px;
        font-size: 20px;
      }
      .btn {
        border: none;
        background-color: rgb(0 0 0 / 65%);
        margin-top: 10px;
        width: 80%;
        margin-left: 10%;
        font-weight: 600;
      }

      .btn:hover {
        color: rgba(236, 236, 15, 0.904) !important;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out;
      }
    }
  }

  .card-img {
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default ServiziCard;
