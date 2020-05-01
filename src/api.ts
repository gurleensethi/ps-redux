import { Course } from "./types";

const courses: Course[] = [];

const delayed = <T>(data: T, timeDelay: number): Promise<T> => {
  return new Promise((res) => {
    setTimeout(() => res(data), timeDelay);
  });
};

export namespace Api {
  export const getCourses = async (): Promise<Course[]> => {
    return delayed(courses, 500);
  };
}
