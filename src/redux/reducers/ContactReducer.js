//import { FUNC } from '../actions';

export const initialState = {
    menu: ["accueil", /*"presentation", "galerie",*/ "prestations", "contact"],
    version: "0.1.2",
    dateMaJ: "17/01/2019",
    author: {
        name: "Nicolas Forget",
        link: "https://www.linkedin.com/in/m-nicolas-forget/"
    }
}

export function contactReducer(state = initialState, action){
    return state;
}

export default {contactReducer}