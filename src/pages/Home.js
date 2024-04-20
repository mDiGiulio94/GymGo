import React, {useState, useEffect} from "react";
import styled from "styled-components";

//api
import PromozioniApi from "../api/promozioniApi";

//Componenti
import CarouselSlide from "../components/CarouselSlider";
import DettaglioPromozioni from "../components/dettaglioPromozioni";


function Home() {

  //Questo deve essere uguale alla prop passata nel componente figlio altrimenti salta tutto
  const [promozioni, setPromozioni] = useState([])

  async function presentazione() {

    try {
      const presenta = await PromozioniApi.getPromozioni()
      if (presenta) {
      setPromozioni(presenta.sort((a, b) => b.id - a.id).slice(0, 1))
      }
    } catch (error) {
      console.log(error)
    }
  }

  //Funzione per la inviare dei dati dal figlio al padre
  //chiedi a danilo perché anche se vuota, la ricezione dei dati funziona ancora
  function riceviDati(periodo) {

}


  useEffect(() => {
    presentazione()
    console.log("ok")
  },[])

  return (
    <>

      <CarouselSlide />
      <DettaglioPromozioni promozioni={ promozioni} onPromozioneRicevuta={riceviDati} />
    </>
  );
}

export default Home;
