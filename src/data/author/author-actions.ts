import { AuthorActionType, LoadAuthorsRequestFinished } from "./author-type";
import { Author, AppThunk } from "src/types";
import { Dispatch } from "redux";
import api from "src/api";

export const loadAuthorsFinished = (
  authors: Author[]
): LoadAuthorsRequestFinished => {
  return {
    authors,
    type: AuthorActionType.LoadAuthorsRequestFinished,
  };
};

export const loadAuthors = (): AppThunk => {
  return (dispatch: Dispatch) => {
    dispatch({ type: AuthorActionType.LoadAuthorsRequest });
    api.getAuthors().then((authors) => dispatch(loadAuthorsFinished(authors)));
  };
};
