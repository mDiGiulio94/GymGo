import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PromozioneScelta = ({ promo, pag }) => {
  return (
    <>
      {pag === "informazioni" && (
        <>
          <Contenitore>
            <div
              style={{ backgroundImage: `url(${promo?.sconto})` }}
              className="img"
            />
            <div className="container">
              <div className="head">{promo?.tipo}</div>
              <div className="body">
                <span>{promo?.descrizione}</span>
                <span>{promo?.periodo}</span>
                <span>{promo?.annuale}</span>
              </div>
              <div className="footer">
                <button>{promo?.bottone1}</button>
                <Link to="/Promozioni">
                  <button>{promo?.bottone2}</button>
                </Link>
              </div>
            </div>
          </Contenitore>
        </>
      )}

      {pag === "home" && (
        <>
        <Contenitore>
          <div
            style={{ backgroundImage: `url(${promo?.sconto})` }}
            className="img"
          />
          <div className="container">
            <div className="head">{promo?.tipo}</div>
            <div className="body">
              <span>{promo?.descrizione}</span>
              <span>{promo?.periodo}</span>
              <span>{promo?.annuale}</span>
            </div>
            <div className="footer">
              <button>{promo?.bottone1}</button>
              <Link to="/Home">
                <button>{promo?.bottone2}</button>
              </Link>
            </div>
          </div>
        </Contenitore>
     </> )}
    </>
  );
};

const Contenitore = styled.div`
  .container {
    /* border: black solid 1px; */
    margin-top: 10px;
  }

  .img {
    width: 100%;
    height: 500px;
    background-size: cover;
    margin-top: 0.3%;
    border: solid black 1px;
  }

  .body {
    display: flex;
    flex-direction: column;

    span {
      margin-top: 1%;
    }
  }

  .head {
    margin-bottom: 5px;
    font-size: 30px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 3%;

    button {
      width: 300px;
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

export default PromozioneScelta;
