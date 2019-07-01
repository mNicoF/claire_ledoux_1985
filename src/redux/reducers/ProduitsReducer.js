const produitsJson = require('./../../datas/Produits.json');

export const initialState = produitsJson

export function produitReducer(state = initialState){
    return state;
}

export default {produitReducer}