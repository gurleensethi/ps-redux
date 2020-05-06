import { CoursesAction, CoursesState, CourseActions } from "./courses-types";

const initialState: CoursesState = { courses: [], course: undefined };

export const coursesReducer = (
  state = initialState,
  action: CoursesAction
): CoursesState => {
  switch (action.type) {
    case CourseActions.LoadCoursesRequestFinished:
      return { ...state, courses: action.courses };
    case CourseActions.CreateCourseRequestFinished:
      return { ...state, courses: [...state.courses, action.course] };
    case CourseActions.LoadCourseRequestFinished:
      return { ...state, course: action.course };
    case CourseActions.UpdateCourseRequestFinished:
      return {
        ...state,
        courses: state.courses.map((course) => {
          if (course.id === action.id) {
            return action.course;
          }
          return course;
        }),
      };
    case CourseActions.DeleteCourseRequestFinished:
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== action.id),
      };
    default:
      return state;
  }
};
