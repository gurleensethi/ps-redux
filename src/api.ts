import { Course, CreateCourseData, Author } from "./types";

const courses: Course[] = JSON.parse(localStorage.getItem("courses") || "[]");
const authors: Author[] = JSON.parse(localStorage.getItem("authors") || "[]");

const delayed = <T>(data: (() => T) | T, timeDelay: number): Promise<T> => {
  const isFunction = (obj: any): obj is () => T => {
    return typeof obj === "function";
  };

  return new Promise((res) => {
    setTimeout(() => {
      if (isFunction(data)) {
        res(data());
      } else {
        res(data);
      }
    }, timeDelay);
  });
};

export default {
  getCourses: async (): Promise<Course[]> => {
    return delayed(courses, 500);
  },
  createCourse: async (createCourseData: CreateCourseData): Promise<Course> => {
    const course: Course = {
      ...createCourseData,
      id: `${Date.now()}${Math.floor(Math.random() * 100)}${Math.floor(
        Math.random() * 100
      )}`,
    };
    return delayed<Course>(() => {
      return course;
    }, 500);
  },
  getCourse: async (id: string): Promise<Course | undefined> => {
    return delayed(
      courses.find((course) => course.id === id),
      500
    );
  },
  getAuthors: async (): Promise<Author[]> => {
    return delayed(authors, 500);
  },
};
