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



  return (
    <>
      <Contenitore>
        <DettaglioPromozioni promozioni={promozioni} />
      </Contenitore>
    </>
  );
};

const Contenitore = styled.div``;

export default Promozioni;
