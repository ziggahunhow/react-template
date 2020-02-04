import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../store/reducers";

import { initialUserState } from "../store/models/users";

export const history = createBrowserHistory();

const initialState = {
  ...initialUserState
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];
const allMiddlewares = applyMiddleware(...middlewares);
const enhancers = process.env.REACT_APP_ENV !== "production" ? composeEnhancers(allMiddlewares) : allMiddlewares;

export const store = createStore(rootReducer, initialState, enhancers);
