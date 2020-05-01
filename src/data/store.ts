import {
  createStore,
  applyMiddleware,
  Dispatch,
  Middleware,
  MiddlewareAPI,
  AnyAction,
  compose,
} from "redux";
import reducer from "./reducer";
import risi from "redux-immutable-state-invariant";

const logger: Middleware<Dispatch> = (store: MiddlewareAPI) => (
  next: Dispatch
) => (action: AnyAction) => {
  console.log("Store", store);
  console.log("Next", next);
  console.log("Action", action);
  return next(action);
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(risi(), logger))
);
