import { CoursesAction, CoursesState, CourseActions } from "./courses-types";

const initialState: CoursesState = [];

export const coursesReducer = (
  state = initialState,
  action: CoursesAction
): CoursesState => {
  switch (action.type) {
    case CourseActions.CreateCourse: {
      return [...state, { ...action.course }];
    }
    default:
      return state;
  }
};
