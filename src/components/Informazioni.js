import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Informazioni = ({ dettaglio }) => {
  return (
    <>
      <Contenitore>
        <div
          // chiedi a danilo perché l'immagine è li ma non la prende nonostante gli altri dati vengano raggiunti tranquillamente
          style={{ backgroundImage: `url(${dettaglio?.image})` }}
          className="img"
        ></div>
        <div className="container">
          <div className="head">{dettaglio?.nome}</div>
          <div className="body">{dettaglio?.dettaglio}</div>
          <div className="footer">
            <button>{dettaglio?.bottone1}</button>
            <Link to="/Servizi">
              <button>{dettaglio?.bottone2}</button>
            </Link>
          </div>
        </div>
      </Contenitore>
    </>
  );
};

export default Informazioni;

const Contenitore = styled.div`
  .img {
    width: 100%;
    height: 300px;
    background-size: cover;
    margin-top: 3px;
    border: solid black 1px;
  }

  .head {
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 30px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    button {
      width: 150px;
      height: 100%;
      text-align: center;
      font-weight: 600;
      font-size: 17px;
      background-color: rgb(187 187 135);
      color: rgb(33 37 41);
      padding: 3px;
      border-radius: 9px;
      
    }

    button:hover {
      color: rgba(236, 236, 15, 0.904);
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out;

    }
  }
`;
