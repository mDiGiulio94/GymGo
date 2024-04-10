import SERVIZI from "../mocks/servizi-mocks";

/*Passi scrittura API
1) Scrivi funzione asincrona
2) Consigliato nominare la funzione come il nome file di riferimento
3) Scrivere il try catch (consigliato scrivere a mano all'inizio)
4) dichiarare una costante con await all'import (di solito l'import è la risposta del server)
5) Imposta il return funzione (ritorna la risposta ricevuta dal server)
6) gestisci l'errore
7) manda in stampa l'errore (apparirà se si presenta error)
8) export ( consigliabile farlo di un oggetto in modo tale da raggruppare tutte le chiamate a server insieme)
*/


async function getServizi (){
    try {
        const servizi = await SERVIZI
        return servizi;
}
    catch (error) {
        console.log(error)
     }
}


/*
chiamata per richiamare un parametro (in questo caso l'id)

nella chiamata è usato un find perché trovato l'id il metodo si fermerà invece che iterare su tutto il contenuto dell'array andato a richiamare come succede invece col find
*/

async function getDettaglio(id) {
    try {
        const dettaglio = await SERVIZI.find(dettagli => dettagli._id === id)
        return dettaglio
    } catch (error) {
        console.log(error)
    }
}


const ServiziApi = {
    getServizi: getServizi,
    getDettaglio: getDettaglio
}

export default ServiziApi;