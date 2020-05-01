import { Course, Author } from "../../types";

export enum CourseActionType {
  CreateCourse = "CREATE_COURSE",
  DeleteCourse = "DELETE_COURSE",
  UpdateCourse = "UPDATE_COURSE",
  LoadCoursesSuccess = "LOAD_COURSES_SUCCESS",
}

export interface CreateCourseAction {
  type: CourseActionType.CreateCourse;
  course: Course;
}

export interface UpdateCourseAction {
  type: CourseActionType.UpdateCourse;
  course: Course;
}

export interface DeleteCourseAction {
  type: CourseActionType.DeleteCourse;
  course: Course;
}

export interface LoadCoursesSuccessAction {
  type: CourseActionType.LoadCoursesSuccess;
  courses: Course[];
}

export type CoursesAction =
  | CreateCourseAction
  | DeleteCourseAction
  | UpdateCourseAction
  | LoadCoursesSuccessAction;

export type CoursesState = Course[];

export type AuthorState = Author[];
