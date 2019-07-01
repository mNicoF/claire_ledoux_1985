const contactJson = require('./../../datas/Contact.json');

export const initialState = contactJson

export function contactReducer(state = initialState){
    return state;
}

export default {contactReducer}