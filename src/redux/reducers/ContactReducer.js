//import { FUNC } from '../actions';

export const contactList = {
    tel: '0983300701',
    mail: 'claire.ledoux.1985@gmail.com',
    facebook: 'https://www.facebook.com/claireledoux1985/'
}

export const initialState = {
    list: contactList
}

export function contactReducer(state = initialState, action){
    switch(action.type){
        /*case FUNC:
            const qqch

            return {
                ...state,
                list: [...state.list, qqch]
            }*/
        default:
            return state;
    }
    
}