import { AuthorState } from "../courses/courses-types";
import { AuthorAction, AuthorActionType } from "./author-type";

const initalState: AuthorState = [];

export const authorReducer = (
  state = initalState,
  action: AuthorAction
): AuthorState => {
  switch (action.type) {
    case AuthorActionType.CreateAuthor:
      return [...state, action.author];
    case AuthorActionType.LoadAuthorsSuccess:
      return action.authors;
    default:
      return state;
  }
};
