//import * as types from './../actions/actionTypes';

const contactJson = require('./../../datas/Contact.json');

export const initialState = contactJson.fr

export function contactReducer(state = initialState, action){
    return state;
    /*switch(action.type){
        case types.SEND_MAIL_SUCCESS:
            return {
                ...state,
                sendMail: action.records
            }
        default:
            return state;
    }*/
}

export default {contactReducer}