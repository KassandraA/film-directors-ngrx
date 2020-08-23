import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FilmDirectorHttpModel, IFilmDirectorsState } from 'src/app/models';
import { Directors } from '../../../assets/film-directors-names';
import * as actions from '../../actions';
import * as directorsState from '../../selectors';

@Component({
  selector: 'app-directors-home',
  templateUrl: './directors-home.component.html',
  styleUrls: ['./directors-home.component.scss'],
})
export class DirectorsHomeComponent implements OnInit {
  directors$: string[] = Directors;
  state$: Observable<IFilmDirectorsState>;
  selectedDirector$: Observable<FilmDirectorHttpModel>;

  constructor(private store: Store<IFilmDirectorsState>) {}

  ngOnInit(): void {
    this.state$ = this.store.pipe(select(directorsState.filmDirectorsData));
    this.selectedDirector$ = this.store.pipe(
      select(directorsState.selectedDirector)
    );
  }

  loadDirector(name: string) {
    console.log(name);
    // tslint:disable-next-line: no-debugger
    // debugger;
    this.store.dispatch(actions.loadFilmDirectorAction({ directorName: name }));
  }

  // test(e) {
  //   console.log(e);
  // }
}
