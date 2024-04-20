//Import
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

//Api
import ServiziApi from "../api/serviziApi";

//Pagine
import Informazioni from "../components/Informazioni";
import ErrorAlert from "../components/Alert";
import Spinner from "../components/Spinner";

//funzione
const DettagliSeduta = () => {

//hook di react-rooter-dom che permette di accedere ai parametri passati dal percorso URL, facendo in modo di restituire l'OGGETTO a cui corrisponde il valore id
    const { id } = useParams();

    const [dettaglio, setDettaglio] = useState();

    const [load, setLoad] = useState (false)


    //chiamata asincrona per il richiamo dei dati dall'api
    async function onGetDettaglio() {
        try {
            setLoad(true)
            //metodo per far si che l'id sia richiamato come numero e non stringa
            const idNumber = Number(id);
            const dettaglio = await ServiziApi.getDettaglio(idNumber)
            if (dettaglio) {
                setTimeout(() => {
                    setDettaglio(dettaglio)
                    setLoad(false)
}, 3000)


                setDettaglio(dettaglio)
                setLoad(false)
            } else {
                setLoad(false)
           }
        } catch (error) { console.log(error)
        setLoad(false) }
    }

    //useEffect per il mount
    useEffect(() => {
        onGetDettaglio();
//array di dipendenze per dire che il mount avviene al caricamenteo della pagina e basta
    }, [])

    return (
      //react fragment (serve a contenere un numero X di elementi figlio)
      <>
        <Contenitore>
          {dettaglio && <Informazioni dettaglio={dettaglio}  />}
          {!dettaglio && !load && <ErrorAlert pag="servizioMancante" />}
          {load && <Spinner />}
        </Contenitore>
      </>
    );
};


export default DettagliSeduta;




//dichiarazione Styled
const Contenitore = styled.div``;