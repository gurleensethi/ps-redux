import {
  CreateCourseAction,
  CourseActionType,
  LoadCoursesSuccessAction,
  LoadCourseAction,
} from "./courses-types";
import { Course, AppThunk, CreateCourseData } from "src/types";
import { Dispatch } from "redux";
import api from "src/api";

export const createCourseSuccess = (course: Course): CreateCourseAction => {
  return {
    course,
    type: CourseActionType.CreateCourse,
  };
};

export const createCourse = (createCourseData: CreateCourseData): AppThunk => {
  return (dispatch: Dispatch) => {
    api
      .createCourse(createCourseData)
      .then((course) => dispatch(createCourseSuccess(course)));
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

export const loadCourseSuccess = (
  course: Course | undefined
): LoadCourseAction => {
  return {
    type: CourseActionType.LoadCourse,
    course,
  };
};

export const loadCourse = (id: string): AppThunk<Promise<void>> => {
  return (dispatch: Dispatch) => {
    dispatch(loadCourseSuccess(undefined));
    return api.getCourse(id).then((course) => {
      dispatch(loadCourseSuccess(course));
    });
  };
};
