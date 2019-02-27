const presentationJson = require('./../../datas/Presentation.json');

export const initialState = presentationJson.fr

export function presentationReducer(state = initialState){
    return state;
}

export default {presentationReducer}