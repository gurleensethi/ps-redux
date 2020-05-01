import { AuthorState } from "../courses/courses-types";
import { AuthorAction, AuthorActionType } from "./author-type";

export const authorReducer = (
  state: AuthorState,
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
