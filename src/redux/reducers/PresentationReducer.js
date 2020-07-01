const presentationJson = require('./../../datas/Presentation.json');
const partenairesJson = require('./../../datas/Partenaires.json');

export const initialState = {
    presentation: presentationJson,
    partenaires: partenairesJson
}

export function presentationReducer(state = initialState) {
    return state;
}

export default { presentationReducer }
