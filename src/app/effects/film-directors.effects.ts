import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map } from 'rxjs/operators';

import { IFilmDirectorsState } from '../models';
import * as actions from '../actions';
import { FilmDirectorsService } from '../services/film-directors.service';

@Injectable()
export class FilmDirectorsEffects {
  constructor(
    private actions$: Actions,
    // private store: Store<FilmDirectorsState>,
    private service: FilmDirectorsService
  ) {}

  // loadFilmDirectors$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(actions.loadFilmDirectorsListAction),
  //     concatMap((action) => {
  //       const filmDirectorsBase = action.filmDirectorsArray;
  //       return filmDirectorsBase.map((director) => {
  //         actions.loadFilmDirectorAction({ directorName: director });
  //       });
  //     })
  //   )
  // );

  loadFilmDirector$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadFilmDirectorAction),
      concatMap((action) =>
        this.service.loadFilmDirectorByName(action.directorName).pipe(
          map((res) => {
            console.log('--->', res);
            return res.success
              ? actions.filmDirectorLoadingSuccessAction({
                  filmDirector: res.data,
                })
              : actions.filmDirectorLoadingFailedAction({ errors: res.error });
          })
        )
      )
    )
  );
}
