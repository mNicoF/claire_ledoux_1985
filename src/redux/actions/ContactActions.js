import * as types from "./actionTypes";
import { API_PATH } from "./apiConfig";

export function actionAppSuccess(actionType, records) {
  return {
    type: actionType,
    records
  };
}

export function closeSendFeedback() {
  return (dispatch) => {
    return dispatch({type: types.RESET_API_MAIL});
  };
}

export function sendMail(mail) {
  return function (dispatch) {
    dispatch({type: types.SENDING_MAIL});
    return fetch(API_PATH, {
      method: 'POST',
      mode: 'no-cors',
      url: API_PATH,
      headers: { 'Content-type': 'application/json' },
      data: mail
    }).then((response) => {
      //remise à zéro pour l'affichage de l'erreur ?
      //dispatch({type: 'RESET_API_MAIL'});
      if (!response.ok) { //(response.status !== 200)
        response.text().then(reason => {
          return dispatch({type: types.SEND_MAIL_ERROR, errorMessage: reason.message});
        })
        console.log(response.text());
        //return Promise.rejected();
      }
      return response.text();
    })
    .then(() => { //json
      dispatch({type: types.SEND_MAIL_SUCCESS})
    })
    .catch((error) => {
      console.log("Erreur envoie de mail : ", error);
    })
  }
}
