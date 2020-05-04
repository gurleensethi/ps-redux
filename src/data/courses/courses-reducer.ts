import { CoursesAction, CoursesState, CourseActionType } from "./courses-types";

const initialState: CoursesState = { courses: [], course: undefined };

export const coursesReducer = (
  state = initialState,
  action: CoursesAction
): CoursesState => {
  switch (action.type) {
    case CourseActionType.LoadCoursesRequestFinished:
      return { ...state, courses: action.courses };
    case CourseActionType.CreateCourseRequestFinished:
      return { ...state, courses: [...state.courses, action.course] };
    case CourseActionType.LoadCourseRequestFinished:
      return { ...state, course: action.course };
    case CourseActionType.UpdateCourseRequestFinished:
      return {
        ...state,
        courses: state.courses.map((course) => {
          if (course.id === action.id) {
            return action.course;
          }
          return course;
        }),
      };
    case CourseActionType.DeleteCourseRequestFinished:
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== action.id),
      };
    default:
      return state;
  }
};
