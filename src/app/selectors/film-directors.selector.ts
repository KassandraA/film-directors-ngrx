import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFilmDirectorsState } from '../models';

export const filmDirectorsState = createFeatureSelector<IFilmDirectorsState>(
  'filmDirectors'
);

export const filmDirectorsData = createSelector(
  filmDirectorsState,
  (state) => state
);

export const selectedDirector = createSelector(
  filmDirectorsState,
  (state) => state.data.selectedFilmDirector
);

export const loading = createSelector(
  filmDirectorsState,
  (state) => state.loading
);

export const error = createSelector(filmDirectorsState, (state) => state.error);
