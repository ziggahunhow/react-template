import * as userActions from "./actionType";

export const changeLanguage = newLanguage => ({ type: userActions.CHANGE_LANGUAGE, payload: newLanguage });
