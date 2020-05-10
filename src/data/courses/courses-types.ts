import { Course, Author } from "../../types";

export enum CourseActions {
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
  type: CourseActions.CreateCourseRequest;
  course: Course;
}

export interface CreateCourseRequestFinishedAction {
  type: CourseActions.CreateCourseRequestFinished;
  course: Course;
}

export interface UpdateCourseRequestAction {
  type: CourseActions.UpdateCourseRequest;
  course: Course;
  id: string;
}

export interface UpdateCourseRequestFinishedAction {
  type: CourseActions.UpdateCourseRequestFinished;
  course: Course;
  id: string;
}

export interface DeleteCourseRequestAction {
  type: CourseActions.DeleteCourseRequest;
  id: string;
}

export interface DeleteCourseRequestFinishedAction {
  type: CourseActions.DeleteCourseRequestFinished;
  id: string;
}

export interface LoadCoursesRequestAction {
  type: CourseActions.LoadCoursesRequest;
}

export interface LoadCoursesRequestFinishedAction {
  type: CourseActions.LoadCoursesRequestFinished;
  courses: Course[];
  time: Date;
}

export interface LoadCourseRequestAction {
  type: CourseActions.LoadCourseRequest;
  id: string;
}

export interface LoadCourseRequestFinishedAction {
  type: CourseActions.LoadCourseRequestFinished;
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

export type CoursesState = {
  courses: Course[];
  lastFetchCourses: Date | undefined;
  course: Course | undefined;
};

export type AuthorState = Author[];
