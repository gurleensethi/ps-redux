import { Course, Author } from "../../types";

export enum CourseActionType {
  CreateCourse = "CREATE_COURSE",
  DeleteCourse = "DELETE_COURSE",
  UpdateCourse = "UPDATE_COURSE",
  LoadCourse = "LOAD_COURSE",
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

export interface LoadCourseAction {
  type: CourseActionType.LoadCourse;
  course: Course | undefined;
}

export type CoursesAction =
  | CreateCourseAction
  | DeleteCourseAction
  | UpdateCourseAction
  | LoadCoursesSuccessAction
  | LoadCourseAction;

export type CoursesState = { courses: Course[]; course: Course | undefined };

export type AuthorState = Author[];
