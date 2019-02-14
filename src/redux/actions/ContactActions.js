//import * as types from "./actionTypes";

export function actionAppSuccess(actionType, records) {
  return {
    type: actionType,
    records
  };
}

/*
export function sendMail(mail) {
  return function(dispatch){
    try {
      const response = await post(dispatch, SEND_MAIL, `${AUTH_ENDPOINT_BASE}/mail`, mail.content, false);
      return response;
    } catch (err) {
      await handleError(dispatch, err, SEND_MAIL);
    }
  }
}*/