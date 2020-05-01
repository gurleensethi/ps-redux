import { CreateCourseAction, CREATE_COURSE } from "./courses-types";
import { Course } from "src/types";

export const createCourse = (course: Course): CreateCourseAction => {
  return {
    course,
    type: CREATE_COURSE,
  };
};
