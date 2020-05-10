import {
  CourseActions,
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
  RootState,
} from "src/types";
import { Dispatch } from "redux";
import api from "src/api";

export const createCourseRequestFinished = (
  course: Course
): CreateCourseRequestFinishedAction => {
  return {
    course,
    type: CourseActions.CreateCourseRequestFinished,
  };
};

export const createCourse = (
  createCourseData: CreateCourseData
): AppThunk<Promise<void>> => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CourseActions.CreateCourseRequest });
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
    type: CourseActions.LoadCoursesRequestFinished,
    time: new Date(),
  };
};

export const loadCourses = (forceFetch: boolean = false): AppThunk => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const {
      courses: { lastFetchCourses },
    } = getState();

    if (
      forceFetch ||
      !lastFetchCourses ||
      Date.now() - lastFetchCourses.getTime() > 2 * 60 * 1000
    ) {
      dispatch({ type: CourseActions.LoadCoursesRequest });
      return api
        .getCourses()
        .then((courses) => {
          dispatch(loadCoursesRequestFinished(courses));
        })
        .catch((error) => {
          throw error;
        });
    }
  };
};

export const loadCourseRequestFinished = (
  course: Course | undefined
): LoadCourseRequestFinishedAction => {
  return {
    type: CourseActions.LoadCourseRequestFinished,
    course,
  };
};

export const loadCourse = (id: string): AppThunk<Promise<void>> => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CourseActions.LoadCourseRequest });
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
    type: CourseActions.UpdateCourseRequestFinished,
  };
};

export const updateCourse = (
  id: string,
  updateCourseData: UpdateCourseData
): AppThunk<Promise<void>> => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CourseActions.UpdateCourseRequest });
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
    type: CourseActions.DeleteCourseRequestFinished,
  };
};

export const deleteCourse = (id: string): AppThunk<Promise<void>> => {
  return (dispatch: Dispatch) => {
    dispatch({ type: CourseActions.DeleteCourseRequest });
    return api.deleteCourse(id).then(() => {
      dispatch(deleteCourseRequestFinished(id));
    });
  };
};
