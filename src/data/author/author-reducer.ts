import { AuthorState } from "../courses/courses-types";
import { AuthorAction, AuthorActionType } from "./author-type";

const initalState: AuthorState = [];

export const authorReducer = (
  state = initalState,
  action: AuthorAction
): AuthorState => {
  switch (action.type) {
    case AuthorActionType.LoadAuthorsRequestFinished:
      return [...state, ...action.authors];
    default:
      return state;
  }
};
