import { CoursesAction, CoursesState, CourseActionType } from "./courses-types";

const initialState: CoursesState = { courses: [], course: undefined };

export const coursesReducer = (
  state = initialState,
  action: CoursesAction
): CoursesState => {
  switch (action.type) {
    case CourseActionType.LoadCoursesSuccess: {
      return { ...state, courses: action.courses };
    }
    case CourseActionType.CreateCourse: {
      return { ...state, courses: [...state.courses, action.course] };
    }
    case CourseActionType.LoadCourse: {
      return { ...state, course: action.course };
    }
    default:
      return state;
  }
};
