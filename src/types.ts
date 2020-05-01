import reducer from "./data/reducer";

export interface Course {
  title: string;
}

export type RootState = ReturnType<typeof reducer>;
