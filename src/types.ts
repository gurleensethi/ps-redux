import reducer from "./data/reducer";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export interface Course {
  id: string;
  title: string;
  authorId: number;
}

export type CreateCourseData = Omit<Course, "id">;

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
