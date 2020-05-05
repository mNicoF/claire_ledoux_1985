const contactJson = require('./../../datas/Contact.json');

export const initialState = contactJson

export function contactReducer(state = initialState, action) {
    switch (action.type) {
        case 'SENDING_MAIL':
            return {
                ...state,
                api: {
                    sending: true,
                    sended: false,
                    sendError: ""
                }
            }
        case 'SEND_MAIL_SUCCESS':
            return {
                ...state,
                api: {
                    sending: false,
                    sended: true,
                    sendError: ""
                }
            }
        case 'SEND_MAIL_ERROR':
            return {
                ...state,
                api: {
                    sending: false,
                    sended: false,
                    sendError: action.errorMessage
                }
            }
        case 'RESET_API_MAIL':
            return {
                ...state,
                api: {
                    sending: false,
                    sended: false,
                    sendError: ""
                }
            }
        default:
            return state;
    }
}

export default { contactReducer }