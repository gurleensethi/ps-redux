import { CreateCourseAction, CourseActions } from "./courses-types";
import { Course } from "src/types";

export const createCourse = (course: Course): CreateCourseAction => {
  return {
    course,
    type: CourseActions.CreateCourse,
  };
};
