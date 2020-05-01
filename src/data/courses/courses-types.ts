import { Course } from "../../types";

export enum CourseActions {
  CreateCourse = "CREATE_COURSE",
  DeleteCourse = "DELETE_COURSE",
  UpdateCourse = "UPDATE_COURSE",
}

export interface CreateCourseAction {
  type: CourseActions.CreateCourse;
  course: Course;
}

export interface UpdateCourseAction {
  type: CourseActions.UpdateCourse;
  course: Course;
}

export interface DeleteCourseAction {
  type: CourseActions.DeleteCourse;
  course: Course;
}

export type CoursesAction =
  | CreateCourseAction
  | DeleteCourseAction
  | UpdateCourseAction;

export type CoursesState = Course[];
