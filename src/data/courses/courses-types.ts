import { Course, Author } from "../../types";

export enum CourseActionType {
  CreateCourseRequest = "CREATE_COURSE_REQUEST",
  CreateCourseRequestFinished = "CREATE_COURSE_REQUEST_FINISHED",
  DeleteCourseRequest = "DELETE_COURSE_REQUEST",
  DeleteCourseRequestFinished = "DELETE_COURSE_REQUEST_FINISHED",
  UpdateCourseRequest = "UPDATE_COURSE_REQUEST",
  UpdateCourseRequestFinished = "UPDATE_COURSE_REQUEST_FINISHED",
  LoadCoursesRequest = "LOAD_COURSES_REQUEST",
  LoadCoursesRequestFinished = "LOAD_COURSES_REQUEST_FINISHED",
  LoadCourseRequest = "LOAD_COURSE_REQUEST",
  LoadCourseRequestFinished = "LOAD_COURSE_REQUEST_FINISHED",
}

export interface CreateCourseRequestAction {
  type: CourseActionType.CreateCourseRequest;
  course: Course;
}

export interface CreateCourseRequestFinishedAction {
  type: CourseActionType.CreateCourseRequestFinished;
  course: Course;
}

export interface UpdateCourseRequestAction {
  type: CourseActionType.UpdateCourseRequest;
  course: Course;
  id: string;
}

export interface UpdateCourseRequestFinishedAction {
  type: CourseActionType.UpdateCourseRequestFinished;
  course: Course;
  id: string;
}

export interface DeleteCourseRequestAction {
  type: CourseActionType.DeleteCourseRequest;
  id: string;
}

export interface DeleteCourseRequestFinishedAction {
  type: CourseActionType.DeleteCourseRequestFinished;
  id: string;
}

export interface LoadCoursesRequestAction {
  type: CourseActionType.LoadCoursesRequest;
}

export interface LoadCoursesRequestFinishedAction {
  type: CourseActionType.LoadCoursesRequestFinished;
  courses: Course[];
}

export interface LoadCourseRequestAction {
  type: CourseActionType.LoadCourseRequest;
  id: string;
}

export interface LoadCourseRequestFinishedAction {
  type: CourseActionType.LoadCourseRequestFinished;
  course: Course | undefined;
}

export type CoursesAction =
  | CreateCourseRequestAction
  | CreateCourseRequestFinishedAction
  | DeleteCourseRequestAction
  | DeleteCourseRequestFinishedAction
  | UpdateCourseRequestAction
  | UpdateCourseRequestFinishedAction
  | LoadCourseRequestAction
  | LoadCourseRequestFinishedAction
  | LoadCoursesRequestAction
  | LoadCoursesRequestFinishedAction;

export type CoursesState = { courses: Course[]; course: Course | undefined };

export type AuthorState = Author[];
