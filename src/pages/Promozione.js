import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

//API
import PromozioniApi from "../api/promozioniApi";

//component
import PromozioneScelta from "../components/PromozioneScelta";

const Promozione = () => {
  //hook di react-rooter-dom che permette di accedere ai parametri passati dal percorso URL, facendo in modo di restituire l'OGGETTO a cui corrisponde il valore id
    const { id } = useParams();

    const [promo, setPromo] = useState();

    //impostare funzione asincrona per richiamo dei dati
    async function OnPromo() {
        try {
            //metodo per far si che l'id sia ricevuto come numero e non come stringa
            const idNumber = Number(id);
            const promo = await PromozioniApi.getPromozione(idNumber)
            setPromo(promo);

        } catch (error) {
            console.log(error)
        }
    }

    //useEffect per il montaggio pagina

    useEffect(() => {
   OnPromo()
},[])

  return (
    <>
          <Contenitore>
<PromozioneScelta promo = {promo} />
      </Contenitore>
    </>
  );
}

const Contenitore = styled.div``;


export default Promozione