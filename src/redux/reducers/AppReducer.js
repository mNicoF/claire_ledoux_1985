//import { FUNC } from '../actions';

const packageJson = require('./../../../package.json');
const appJson = require('./../../datas/App.json');

export const initialState = {
    target: (packageJson.homepage)? packageJson.homepage : "http://www.claireledoux1985.fr/", //https://mnicof.github.io/claire_ledoux_1985
    version: packageJson.version,
    dateMaJ: packageJson.date,
    menu: appJson.fr.menu, /*"presentation", "galerie", "definitions"*/
    author: appJson.fr.author
}

export function appReducer(state = initialState, action){
    return state;
}

export default {appReducer}



/*export function appReducer(state = initialState, action){
    switch(action.type){
        case FUNC:
            const qqch

            return {
                ...state,
                list: [...state.list, qqch]
            }
        default:
            return state;
    }
    
}*/