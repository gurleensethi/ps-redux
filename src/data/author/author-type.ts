import { Author } from "src/types";

export enum AuthorActionType {
  LoadAuthorsSuccess = "LOAD_AUTHORS_SUCCESS",
  CreateAuthor = "CREATE_AUTHOR",
}

export interface CreateAuthorAction {
  type: AuthorActionType.CreateAuthor;
  author: Author;
}

export interface LoadAuthorsSuccess {
  type: AuthorActionType.LoadAuthorsSuccess;
  authors: Author[];
}

export type AuthorAction = LoadAuthorsSuccess | CreateAuthorAction;
