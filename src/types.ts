import reducer from "./data/reducer";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export interface Course {
  id: string;
  title: string;
  authorId: string;
}

export type CreateCourseData = Omit<Course, "id">;

export type CourseFormFields = Omit<Course, "id">;
export type CourseFormErrors = { [key in keyof CourseFormFields]?: string };

export interface Author {
  id: string;
  name: string;
}

export type RootState = ReturnType<typeof reducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export interface Loadable<T> {
  isLoading: boolean;
  data?: T;
  success: boolean;
  message?: string;
  timestamp: Date;
}
