import PROMOZIONI from "../mocks/promozioni-mocks";

//funzione asincrona di chiamata
async function getPromozioni () {
    try {
        const promozioni = await PROMOZIONI
        return promozioni;
    } catch (error) {
        console.log(error)
    }
}

//chiamata API con parametro id

async function getPromozione(id) {
    try {

//verbalmente si sta dichiarando una costante promozione che aspetta come risposta dal "server" attraverso un metodo find che dovrà restituire un id, che dovrà essere uguale per tipo (numerico) e valore all'id passato come argomento dalla funzione  ( si parla di questo getPromozione => (id) <= ARGOMENTO), quel punto restituirà la funzione altrimenti niente

        const promozione = await PROMOZIONI.find(promozione => promozione.id === id)
        return promozione
    } catch (error) {
        console.log(error)
    }
}

//costante che raggruppa tutte le chiamate in un oggetto per l'export
const PromozioniApi = {
    getPromozioni: getPromozioni,
    getPromozione: getPromozione
}

export default PromozioniApi