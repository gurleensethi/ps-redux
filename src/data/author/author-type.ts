import { Author } from "src/types";

export enum AuthorActionType {
  LoadAuthorsRequest = "LOAD_AUTHORS_REQUEST",
  LoadAuthorsRequestFinished = "LOAD_AUTHORS_REQUEST_FINISHED",
}

export interface LoadAuthorsRequest {
  type: AuthorActionType.LoadAuthorsRequest;
}

export interface LoadAuthorsRequestFinished {
  type: AuthorActionType.LoadAuthorsRequestFinished;
  authors: Author[];
}

export type AuthorAction = LoadAuthorsRequest | LoadAuthorsRequestFinished;
