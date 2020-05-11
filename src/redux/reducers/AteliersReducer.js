const ateliersJson = require('../../datas/Ateliers.json');

export const initialState = ateliersJson

export function ateliersReducer(state = initialState){
    return state;
}

export default {ateliersReducer}