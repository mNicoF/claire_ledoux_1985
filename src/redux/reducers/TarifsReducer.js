const tarifsJson = require('./../../datas/Tarifs.json');

export const initialState = tarifsJson

export function tarifsReducer(state = initialState){
    return state;
}

export default {tarifsReducer}