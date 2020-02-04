import { combineReducers } from "redux";

import { users } from "./users";

const appReducer = combineReducers({
  user: users
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
