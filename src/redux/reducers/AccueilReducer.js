const accueilJson = require('./../../datas/Accueil.json');

export const initialState = {
    accueil: accueilJson
    //TODO import les autres Json
}

export function appReducer(state = initialState){
    return state;
}

export default {appReducer}
