const tarifsJson = require('./../../datas/Tarifs.json');

export const initialState = tarifsJson.fr

export function tarifsReducer(state = initialState){
    return state;
}

export default {tarifsReducer}