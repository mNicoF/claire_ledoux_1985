const videosJson = require('./../../datas/Videos.json');

export const initialState = videosJson

export function mediasReducer(state = initialState){
    return state;
}

export default {mediasReducer}