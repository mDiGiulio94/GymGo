import React, { useState, useEffect } from "react";
import styled from "styled-components";

//Api
import PromozioniApi from "../api/promozioniApi";
import DettaglioPromozioni from "../components/dettaglioPromozioni";

//funzione pagina promozioni
const Promozioni = () => {
  const [promozioni, setPromozioni] = useState([]);

  async function prendiPromozioni() {
    try {
      const promozioni = await PromozioniApi.getPromozioni();
      setPromozioni(promozioni);
    } catch (error) {
      console.log(error);
    }
  }

  //use effect per il caricamento dati al montaggio della pagina
  useEffect(() => {
    prendiPromozioni();
    console.log("promozioni prese");
  },[]);

useEffect(() => {
  if (promozioni.length > 1) console.log("hai ricevuto le ricette dal server");
  console.log(promozioni);
}, [promozioni]);



  return (
    <>
      <Contenitore>
        <div className="titolo">
          <h2>Promozioni Disponibili</h2>
          <DettaglioPromozioni promozioni={promozioni} />
        </div>
      </Contenitore>
    </>
  );
};

const Contenitore = styled.div`
  .titolo {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 40px;
    font-weight: 600;
    color: rgb(33 37 41);
    text-align: center;
  }
`;

export default Promozioni;
