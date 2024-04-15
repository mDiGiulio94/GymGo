import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//componente



const DettaglioPromozioni = ({ promozioni, onPromozioneRicevuta, pag }) => {



  // funzione per ridurre la descrizione
  const Riduci = (informazioni) => {
    //dichirazione indice numerico al quale volgioamo ridurre la descrizione
    const massimaLung = 600;
    //condizione che permette di accorciare il teso
    if (informazioni.length >= massimaLung) {
      return massimaLung;
    } else {
      //impostare la riduzione all'ultimo spazio vuoto
      const ultimoSpazio = informazioni.lastIndexof(" ", massimaLung);
      return ultimoSpazio;
    }
  };

  //funzione di call back per inviare dati da componente figlio a  padre
  function inviaPromozione(periodo) {
    if(pag === "home"){}
  onPromozioneRicevuta(periodo)
}


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
              <span>
                {promozione.descrizione.slice(
                  " ",
                  Riduci(promozione.descrizione)
                )}
                ...
              </span>
              <span>{promozione.tipo}</span>
              <span>{promozione.annuale}</span>

              <Link to={`/PromozioneScelta/${promozione.periodo}/${promozione.id}`}>
                <button> {promozione.bottone}</button>
              </Link>
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
      width: 100%;
    }

    button:hover {
      color: rgba(236, 236, 15, 0.904);
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out;
    }
  }
`;

export default DettaglioPromozioni;
