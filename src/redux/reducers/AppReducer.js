import * as types from "./../actions/actionTypes";

const packageJson = require("./../../../package.json");
const appJson = require("./../../datas/App.json");

export const initialState = {
  target: packageJson.homepage
    ? packageJson.homepage
    : "http://www.claireledoux1985.fr/", //https://mnicof.github.io/claire_ledoux_1985 //http://localhost:3000/
  version: packageJson.version,
  dateMaJ: packageJson.date,
  lang: null,
  device: appJson.default_device,
  menu: appJson.menu,
  infos: appJson,
  //menu: + "presentation", "galerie", "definitions"
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DEVICE_SUCCESS:
      return {
        ...state,
        device: action.records
      };
    case types.SET_LANG_SUCCESS:
      return {
        ...state,
        lang: action.records
      };
    default:
      return state;
  }
}

export default { appReducer };
