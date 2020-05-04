import { RootState } from "src/types";
import { createSelector } from "reselect";
import { LoadingState } from "./loading-types";

const isLoading = (state: LoadingState, actions: string[]) => {
  return actions.some((action) => state[action]);
};

export const loadingSelector = createSelector<
  RootState, // State
  string[], // Props (actions that will be passed)
  LoadingState, // R1 from State
  string[], // R2
  boolean
>(
  (state: RootState) => state.loading,
  (state: RootState, actions: string[]) => actions,
  isLoading
);
