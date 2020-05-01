import { CoursesAction, CoursesState, CREATE_COURSE } from "./courses-types";

const initialState: CoursesState = [];

export const coursesReducer = (
  state = initialState,
  action: CoursesAction
): CoursesState => {
  switch (action.type) {
    case CREATE_COURSE: {
      return [...state, { ...action.course }];
    }
    default:
      return state;
  }
};
