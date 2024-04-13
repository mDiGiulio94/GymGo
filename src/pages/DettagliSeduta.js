//Import
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

//Api
import ServiziApi from "../api/serviziApi";

//Pagine
import Informazioni from "../components/Informazioni";

//funzione
const DettagliSeduta = () => {


    const { id } = useParams();
    const [dettaglio, setDettaglio] = useState();


    //chiamata asincrona per il richiamo dei dati dall'api
    async function onGetDettaglio() {
        try {
            //metodo per far si che l'id sia richiamato come numero e non stringa
            const idNumber = Number(id);
            const dettaglio = await ServiziApi.getDettaglio(idNumber)
            setDettaglio(dettaglio)
        } catch (error) { console.log(error) }
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
<Informazioni dettaglio ={dettaglio} />
            </Contenitore>
        </>
    )
};


export default DettagliSeduta;




//dichiarazione Styled
const Contenitore = styled.div``;