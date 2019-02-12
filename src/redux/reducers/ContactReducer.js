const contactJson = require('./../../datas/Contact.json');

export const initialState = contactJson.fr

export function contactReducer(state = initialState, action){
    return state;
}

export default {contactReducer}