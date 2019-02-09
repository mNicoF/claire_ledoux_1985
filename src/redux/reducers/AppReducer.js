//import { FUNC } from '../actions';

const pjson = require('./../../../package.json');

export const initialState = {
    target: (pjson.homepage)? pjson.homepage : "http://www.claireledoux1985.fr/", //https://mnicof.github.io/claire_ledoux_1985
    menu: ["accueil", /*"presentation", "galerie",*/ "prestations", "contact"],
    version: pjson.version,
    dateMaJ: pjson.date,
    author: {
        name: "Nicolas Forget",
        link: "https://www.linkedin.com/in/m-nicolas-forget/"
    }
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