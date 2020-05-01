import { combineReducers } from "redux";
import { coursesReducer } from "./courses/courses-reducer";
import { authorReducer } from "./author/author-reducer";

export default combineReducers({
  courses: coursesReducer,
  authors: authorReducer,
});
