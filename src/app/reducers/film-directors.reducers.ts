import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions/film-directors.actions';
import { IFilmDirectorsState } from '../models';

const initialState: IFilmDirectorsState = {
  data: {
    user: undefined,
    filmDirectorsList: [],
    selectedFilmDirector: undefined,
  },
  loading: true,
};

export const appReducer = createReducer(
  initialState,
  // on(actions.tryToLoginAction, (state, action) => ({
  //   ...state,
  //   loading: true,
  // })),

  // on(actions.loginSuccessAction, (state, action) => ({
  //   ...state,
  //   loading: false,
  //   data: { user: action.user },
  // })),

  // on(actions.loginFailedAction, (state, action) => ({
  //   ...state,
  //   loading: false,
  //   error: action.errors,
  // }))
  // on(actions.loadFilmDirectorsListAction, (state, action) => ({
  //   ...state,
  //   loading: true,
  // })),

  // on(actions.filmDirectorsListLoadingSuccessAction, (state, action) => ({
  //   ...state,
  //   loading: false,
  //   data: { ...state.data, filmDirectorsList: action.filmDirectors },
  // })),

  // on(actions.filmDirectorsListLoadingFailedAction, (state, action) => ({
  //   ...state,
  //   loading: false,
  //   error: action.errors,
  // })),

  on(actions.loadFilmDirectorAction, (state, action) => ({
    ...state,
    loading: true,
  })),

  on(actions.filmDirectorLoadingSuccessAction, (state, action) => ({
    ...state,
    loading: false,
    data: {
      ...state.data,
      selectedFilmDirector: action.filmDirector,
    },
  })),

  on(actions.filmDirectorLoadingFailedAction, (state, action) => ({
    ...state,
    loading: false,
    error: action.errors,
  }))
);

export function filmDirectorsReducer(
  // state: FilmDirectorsState,
  // action: Action
  state,
  action
) {
  return appReducer(state, action);
}
