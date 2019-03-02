const presentationJson = require('./../../datas/Presentation.json');

export const initialState = presentationJson

export function presentationReducer(state = initialState){
    return state;
}

export default {presentationReducer}