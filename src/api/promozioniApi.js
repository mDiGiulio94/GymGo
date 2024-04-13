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

//costante che raggruppa tutte le chiamate in un oggetto per l'export
const PromozioniApi = {
    getPromozioni : getPromozioni
}

export default PromozioniApi