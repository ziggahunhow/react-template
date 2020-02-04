import { userConstants } from "../actions/actionType";
import { initialUserState } from "../models/users";

export function users(state = {}, action = {}) {
  switch (action.type) {
    case userConstants.INITIAL_USER:
      return {
        ...state,
        user: initialUserState
      };
    case userConstants.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };

    default:
      return state;
  }
}
