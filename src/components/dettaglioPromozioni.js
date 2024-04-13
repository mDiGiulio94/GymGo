import React from "react";
import styled from "styled-components";

//

const dettaglioPromozioni = ({ promozioni }) => {
  return (
    <>
      <Contenitore>
        {promozioni.map((promozione, index) => (
          <div className="container" key={index}>
            <div className="casella-img">
              <div
                style={{ backgroundImage: `url(${promozione.sconto})` }}
              ></div>
            </div>
            <div className="titolo">
              <span>{promozione.periodo}</span>
              <span>{promozione.descrizione}</span>
              <span>{promozione.tipo}</span>
              <span>{promozione.annuale}</span>
              <button>{promozione.bottone}</button>
            </div>
          </div>
        ))}
      </Contenitore>
    </>
  );
};

const Contenitore = styled.div`
  .container {
    border: solid 1px black;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
  }

  .casella-img {
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    width: 60%;

    div {
      height: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .titolo {
    margin-left: 3%;
    display: block;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    width: 40%;

    span {
      margin: 1%;
    }
    button {

        margin-top: 5%;
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

export default dettaglioPromozioni;
