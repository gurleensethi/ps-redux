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
    case CourseActionType.UpdateCourse: {
      return {
        ...state,
        courses: state.courses.map((course) => {
          if (course.id === action.id) {
            return action.course;
          }
          return course;
        }),
      };
    }
    default:
      return state;
  }
};
