import * as types from './../actions/actionTypes';

const packageJson = require('./../../../package.json');
const appJson = require('./../../datas/App.json');

export const initialState = {
    target: (packageJson.homepage)? packageJson.homepage : "http://www.claireledoux1985.fr/", //https://mnicof.github.io/claire_ledoux_1985
    version: packageJson.version,
    dateMaJ: packageJson.date,
    menu: appJson.fr.menu, /*"presentation", "galerie", "definitions"*/
    author: appJson.fr.author,
    //device: "Desktop"
}

export function appReducer(state = initialState, action){
    switch(action.type){
        case types.LOAD_DEVICE_SUCCESS:
            return {
                ...state,
                device: action.records
            }
        default:
            return state;
    }
}

export default {appReducer}
