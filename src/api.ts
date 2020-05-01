import { Course, CreateCourseData, Author } from "./types";

const courses: Course[] = JSON.parse(
  localStorage.getItem("courses") ||
    JSON.stringify([{ id: "1", title: "Redux 101", authorId: "1" }])
);

const authors: Author[] = JSON.parse(
  localStorage.getItem("authors") ||
    JSON.stringify([{ id: "1", name: "John Doe" }])
);

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
    return delayed(
      courses.map((course) => course),
      500
    );
  },
  createCourse: async (createCourseData: CreateCourseData): Promise<Course> => {
    const course: Course = {
      ...createCourseData,
      id: `${Date.now()}${Math.floor(Math.random() * 100)}${Math.floor(
        Math.random() * 100
      )}`,
    };
    return delayed<Course>(() => {
      courses.push(course);
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
    return delayed(
      authors.map((author) => author),
      500
    );
  },
};
