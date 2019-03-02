const accueilJson = require('./../../datas/Accueil.json');

export const initialState = accueilJson.fr

export function accueilReducer(state = initialState){
    return state;
}

export default {accueilReducer}
