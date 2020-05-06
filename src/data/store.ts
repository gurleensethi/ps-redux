import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import risi from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

// Enable redux dev tools
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, risi()))
);
