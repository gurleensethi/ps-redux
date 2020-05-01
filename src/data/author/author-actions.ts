import {
  CreateAuthorAction,
  AuthorActionType,
  LoadAuthorsSuccess,
} from "./author-type";
import { Author, AppThunk } from "src/types";
import { Dispatch } from "redux";
import api from "src/api";

export const createAuthor = (author: Author): CreateAuthorAction => {
  return {
    author,
    type: AuthorActionType.CreateAuthor,
  };
};

export const loadAuthorsSuccess = (authors: Author[]): LoadAuthorsSuccess => {
  return {
    authors,
    type: AuthorActionType.LoadAuthorsSuccess,
  };
};

export const loadAuthors = (): AppThunk => {
  return (dispatch: Dispatch) => {
    api.getAuthors().then((authors) => dispatch(loadAuthorsSuccess(authors)));
  };
};
