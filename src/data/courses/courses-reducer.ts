import { CoursesAction, CoursesState, CourseActionType } from "./courses-types";

const initialState: CoursesState = [];

export const coursesReducer = (
  state = initialState,
  action: CoursesAction
): CoursesState => {
  switch (action.type) {
    case CourseActionType.LoadCoursesSuccess: {
      return action.courses;
    }
    case CourseActionType.CreateCourse: {
      return [...state, { ...action.course }];
    }
    default:
      return state;
  }
};
