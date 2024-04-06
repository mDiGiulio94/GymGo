import React from "react";
import styled from "styled-components";

import ServiziCard from "../components/Card";
import ServiziApi from "../api/promozioniApi";
import { useState, useEffect } from "react";

/*Gestione chiamata:
1) Dichiarazione funzione
2) Impostare variabile di stato (useState), in questo caso array vuoto, cha verrà riempito dall'array di informazioni presenti nel alto server(o mock file)
3) Siccome deve gestire una chiamata asincrona, anche questa dovrà essere asincrona
4) Gestisci lo useEffect(), solitamente a fine pagina
5) Imposta sempre uno useEffect di mount prima degli altri useEffect()
6) Ricorda che la struttura di uno useEffect rimanda a quella dei metodi sugli array
*/

const Servizi = () => {
  const [servizi, setServizi] = useState([]);

  async function prendiServizi() {
    try {
      const servizi = await ServiziApi.getServizi();
      setServizi(servizi);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    prendiServizi();
    console.log("sevizio presi");
  });

  useEffect(() => {
    if (servizi.length > 0) console.log("risposta corretta");
    console.log(servizi);
  }, [servizi]);
  return (
    <>
      <Contenitore>
        <div className="titolo">
          <h2>Corsi e Servizi</h2>
        </div>
        <ServiziCard servizi={servizi} />
      </Contenitore>
    </>
  );
};

const Contenitore = styled.div`
   .titolo{
    display: flex;
    justify-content: center;
    margin-top: 30px;

  }
`;

export default Servizi;
