import { Course } from "../../types";

export const CREATE_COURSE = "CREATE_COURSE";
export const UPDATE_COURSE = "UPDATE_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";

export interface CreateCourseAction {
  type: typeof CREATE_COURSE;
  course: Course;
}

export interface UpdateCourseAction {
  type: typeof UPDATE_COURSE;
  course: Course;
}

export interface DeleteCourseAction {
  type: typeof DELETE_COURSE;
  course: Course;
}

export type CoursesAction =
  | CreateCourseAction
  | DeleteCourseAction
  | UpdateCourseAction;

export type CoursesState = Course[];
