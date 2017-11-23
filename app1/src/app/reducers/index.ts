import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import * as fromLayout from './layout';

export interface State {
  layout: fromLayout.State;
}


export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
};

// For debug
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowNavBar = createSelector(
  getLayoutState,
  fromLayout.getShowNavBar
);
