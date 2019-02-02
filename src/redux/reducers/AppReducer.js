//import { FUNC } from '../actions';

export const initialState = {
    target: "REC", //PROD
    menu: ["accueil", /*"presentation", "galerie",*/ "prestations", "contact"],
    version: "1.0.2",
    dateMaJ: "22/01/2019",
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