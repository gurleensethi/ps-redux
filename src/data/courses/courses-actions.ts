import {
  CourseActionType,
  CreateCourseRequestFinishedAction,
  LoadCourseRequestFinishedAction,
  LoadCoursesRequestFinishedAction,
  UpdateCourseRequestFinishedAction,
  DeleteCourseRequestFinishedAction,
} from "./courses-types";
import {
  Course,
  AppThunk,
  CreateCourseData,
  UpdateCourseData,
} from "src/types";
import { Dispatch } from "redux";
import api from "src/api";

export const createCourseRequestFinished = (
  course: Course
): CreateCourseRequestFinishedAction => {
  return {
    course,
    type: CourseActionType.CreateCourseRequestFinished,
  };
};

export const createCourse = (
  createCourseData: CreateCourseData
): AppThunk<Promise<void>> => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CourseActionType.CreateCourseRequest });
    return api.createCourse(createCourseData).then((course) => {
      dispatch(createCourseRequestFinished(course));
    });
  };
};

export const loadCoursesRequestFinished = (
  courses: Course[]
): LoadCoursesRequestFinishedAction => {
  return {
    courses,
    type: CourseActionType.LoadCoursesRequestFinished,
  };
};

export const loadCourses = (): AppThunk => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CourseActionType.LoadCoursesRequest });
    return api
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesRequestFinished(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const loadCourseRequestFinished = (
  course: Course | undefined
): LoadCourseRequestFinishedAction => {
  return {
    type: CourseActionType.LoadCourseRequestFinished,
    course,
  };
};

export const loadCourse = (id: string): AppThunk<Promise<void>> => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CourseActionType.LoadCourseRequest });
    return api.getCourse(id).then((course) => {
      dispatch(loadCourseRequestFinished(course));
    });
  };
};

export const updateCousreRequestFinished = (
  id: string,
  course: Course
): UpdateCourseRequestFinishedAction => {
  return {
    id,
    course,
    type: CourseActionType.UpdateCourseRequestFinished,
  };
};

export const updateCourse = (
  id: string,
  updateCourseData: UpdateCourseData
): AppThunk<Promise<void>> => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CourseActionType.UpdateCourseRequest });
    return api.updateCourse(id, updateCourseData).then((updateCourse) => {
      if (updateCourse) {
        dispatch(updateCousreRequestFinished(id, updateCourse));
      }
    });
  };
};

export const deleteCourseRequestFinished = (
  id: string
): DeleteCourseRequestFinishedAction => {
  return {
    id,
    type: CourseActionType.DeleteCourseRequestFinished,
  };
};

export const deleteCourse = (id: string): AppThunk<Promise<void>> => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CourseActionType.DeleteCourseRequest });
    return api.deleteCourse(id).then(() => {
      dispatch(deleteCourseRequestFinished(id));
    });
  };
};
