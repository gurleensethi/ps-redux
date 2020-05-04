import { LoadingState } from "./loading-types";

const initialState: LoadingState = {};

/**
 * Actions with 'REQUEST' will trigger loading.
 * Actions with 'REQUEST' and with 'FINISHED' will disable loading.
 */
export const loadingReducer = (
  state = initialState,
  action: { type: string }
): LoadingState => {
  const isRequest = action.type.includes("_REQUEST");

  if (!isRequest) {
    return state;
  }

  const isRequestFinished = action.type.endsWith("_FINISHED");

  return {
    ...state,
    [action.type.replace("_FINISHED", "")]: isRequestFinished === false,
  };
};
