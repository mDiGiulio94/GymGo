import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";



//API
import PromozioniApi from "../api/promozioniApi";

//component
import PromozioneScelta from "../components/PromozioneScelta";
import ErrorAlert from "../components/Alert";
import Spinner from "../components/Spinner";


const Promozione = () => {
  //hook di react-rooter-dom che permette di accedere ai parametri passati dal percorso URL, facendo in modo di restituire l'OGGETTO a cui corrisponde il valore id
  const { id } = useParams();

  //useState per il recupero dei dati da API
  const [promo, setPromo] = useState();

  //useState per impostare la condizione dello spinner
  const [load, setLoad] = useState(false);

  //impostare funzione asincrona per richiamo dei dati
  async function OnPromo() {
    try {
      setLoad(true);
      //metodo per far si che l'id sia ricevuto come numero e non come stringa
      const idNumber = Number(id);
      const promo = await PromozioniApi.getPromozione(idNumber);
      if (promo) {
        // setTimeout(() => {
        //   setPromo(promo);
        //   setLoad(false);
        // }, 300000);

        setPromo(promo);
        setLoad(false);
      } else {
        setLoad(false);
      }
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  }

  //useEffect per il montaggio pagina

  useEffect(() => {
    OnPromo();
  }, []);

  return (
    <>
      <Contenitore>
        {promo && <PromozioneScelta promo={promo} />}
        {!promo && !load && <ErrorAlert />}

        {load && (  <Spinner />
        )}
      </Contenitore>
    </>
  );
};

const Contenitore = styled.div`
  .mancante {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }

`;

export default Promozione;
