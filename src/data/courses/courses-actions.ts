import {
  CreateCourseAction,
  CourseActionType,
  LoadCoursesSuccessAction,
} from "./courses-types";
import { Course, AppThunk } from "src/types";
import { Dispatch } from "redux";
import api from "src/api";

export const createCourse = (course: Course): CreateCourseAction => {
  return {
    course,
    type: CourseActionType.CreateCourse,
  };
};

export const loadCoursesSuccess = (
  courses: Course[]
): LoadCoursesSuccessAction => {
  return {
    courses,
    type: CourseActionType.LoadCoursesSuccess,
  };
};

export const loadCourses = (): AppThunk => {
  return (dispatch: Dispatch) => {
    return api
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
};
