import { createAction, props } from '@ngrx/store';
import { User, FilmDirectorHttpModel } from '../models';

export const filmDirectorsActionTypes = {
  // tryLogin: '[Login screen] Try to login',
  // loginSuccess: '[Login effects] Login success',
  // loginFailed: '[Login effects] Login failed',
  // loadFilmDirectorsList: '[Directors screen] Load film directors list',
  // filmDirectorsListLoadingSuccess:
  //   '[Directors effect] Film directors list loaded',
  // filmDirectorsListLoadingFailed:
  //   '[Directors effect] Film directors list loading failed',

  loadFilmDirector: '[Directors screen] Load film director',
  filmDirectorLoadingSuccess: '[Directors effect] Film director loaded',
  filmDirectorLoadingFailed: '[Directors effect] Film director loading failed',
};

// export const tryToLoginAction = createAction(
//   filmDirectorsActionTypes.tryLogin,
//   props<{ username: string; password: string }>()
// );

// export const loginSuccessAction = createAction(
//   filmDirectorsActionTypes.loginSuccess,
//   props<{ user: User }>()
// );

// export const loginFailedAction = createAction(
//   filmDirectorsActionTypes.loginFailed,
//   props<{ errors: string }>()
// );

// export const loadFilmDirectorsListAction = createAction(
//   filmDirectorsActionTypes.loadFilmDirectorsList,
//   props<{ filmDirectorsArray: string[] }>()
// );

// export const filmDirectorsListLoadingSuccessAction = createAction(
//   filmDirectorsActionTypes.filmDirectorsListLoadingSuccess,
//   props<{ filmDirectors: FilmDirectorHttpModel[] }>()
// );

// export const filmDirectorsListLoadingFailedAction = createAction(
//   filmDirectorsActionTypes.filmDirectorsListLoadingFailed,
//   props<{ errors: string }>()
// );

export const loadFilmDirectorAction = createAction(
  filmDirectorsActionTypes.loadFilmDirector,
  props<{ directorName: string }>()
);

export const filmDirectorLoadingSuccessAction = createAction(
  filmDirectorsActionTypes.filmDirectorLoadingSuccess,
  props<{ filmDirector: FilmDirectorHttpModel }>()
);

export const filmDirectorLoadingFailedAction = createAction(
  filmDirectorsActionTypes.filmDirectorLoadingFailed,
  props<{ errors: string }>()
);
