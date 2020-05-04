import { combineReducers } from "redux";
import { coursesReducer } from "./courses/courses-reducer";
import { authorReducer } from "./author/author-reducer";
import { loadingReducer } from "./loading/loading-reducer";

export default combineReducers({
  courses: coursesReducer,
  authors: authorReducer,
  loading: loadingReducer,
});
