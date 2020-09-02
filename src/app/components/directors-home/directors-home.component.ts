import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FilmDirectorHttpModel, IFilmDirectorsState } from 'src/app/models';
import { Directors, TestData } from '../../../assets/film-directors-names';
import * as actions from '../../actions';
import * as directorsState from '../../selectors';

@Component({
  selector: 'app-directors-home',
  templateUrl: './directors-home.component.html',
  styleUrls: ['./directors-home.component.scss'],
})
export class DirectorsHomeComponent implements OnInit {
  // directors$: { id: number; name: string; selected: boolean }[] = Directors;
  testData: { id: number; name: string; selected: boolean }[] = TestData;
  state$: Observable<IFilmDirectorsState>;
  selectedDirector$: Observable<FilmDirectorHttpModel>;

  // tableHeads = ['id', 'first', 'second', 'third', 'forth', 'fifth'];
  tableHeads = [
    { id: 0, name: 'id' },
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
    { id: 3, name: 'third' },
    { id: 4, name: 'forth' },
    { id: 5, name: 'fifth' },
  ];

  tableData = [
    {
      id: 0,
      first: 'Obj_0 Param_1',
      second: 'Obj_0 Param_2',
      third: ' Obj_0 Param_3',
      forth: 'Obj_0 Param_4',
      fifth: 'Obj_0 Param_5',
    },
    {
      id: 1,
      first: 'Obj_1 Param_1',
      second: 'Obj_1 Param_2',
      third: ' Obj_1 Param_3',
      forth: 'Obj_1 Param_4',
      fifth: 'Obj_1 Param_5',
    },
    {
      id: 2,
      first: 'Obj_2 Param_1',
      second: 'Obj_2 Param_2',
      third: ' Obj_2 Param_3',
      forth: 'Obj_2 Param_4',
      fifth: 'Obj_2 Param_5',
    },
    {
      id: 3,
      first: 'Obj_3 Param_1',
      second: 'Obj_3 Param_2',
      third: ' Obj_3 Param_3',
      forth: 'Obj_3 Param_4',
      fifth: 'Obj_3 Param_5',
    },
    {
      id: 4,
      first: 'Obj_4 Param_1',
      second: 'Obj_4 Param_2',
      third: ' Obj_4 Param_3',
      forth: 'Obj_4 Param_4',
      fifth: 'Obj_4 Param_5',
    },
    {
      id: 5,
      first: 'Obj_5 Param_1',
      second: 'Obj_5 Param_2',
      third: ' Obj_5 Param_3',
      forth: 'Obj_5 Param_4',
      fifth: 'Obj_5 Param_5',
    },
    {
      id: 5,
      first: 'Obj_5 Param_1',
      second: 'Obj_5 Param_2',
      third: ' Obj_5 Param_3',
      forth: 'Obj_5 Param_4',
      fifth: 'Obj_5 Param_5',
    },
    {
      id: 5,
      first: 'Obj_5 Param_1',
      second: 'Obj_5 Param_2',
      third: ' Obj_5 Param_3',
      forth: 'Obj_5 Param_4',
      fifth: 'Obj_5 Param_5',
    },
    {
      id: 5,
      first: 'Obj_5 Param_1',
      second: 'Obj_5 Param_2',
      third: ' Obj_5 Param_3',
      forth: 'Obj_5 Param_4',
      fifth: 'Obj_5 Param_5',
    },
  ];

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
