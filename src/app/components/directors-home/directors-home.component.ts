import { Component, OnInit, SimpleChanges } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FilmDirectorHttpModel, IFilmDirectorsState } from 'src/app/models';
import { Directors, TestData } from '../../../assets/film-directors-names';
import * as actions from '../../actions';
import * as directorsState from '../../selectors';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-directors-home',
  templateUrl: './directors-home.component.html',
  styleUrls: ['./directors-home.component.scss'],
})
export class DirectorsHomeComponent implements OnInit {
  // directors$: { id: number; name: string; selected: boolean }[] = Directors;
  // state$: Observable<IFilmDirectorsState>;
  // selectedDirector$: Observable<FilmDirectorHttpModel>;

  elementFormControl = new FormControl();

  testData: { id: number; name: string; selected: boolean }[] = [
    { id: 0, name: 'id', selected: true },
    { id: 1, name: 'first', selected: true },
    { id: 2, name: 'second', selected: false },
    { id: 3, name: 'third', selected: false },
    { id: 4, name: 'forth', selected: false },
    { id: 5, name: 'fifth', selected: false },
  ];

  private tableHeads = [
    { id: 0, name: 'id' },
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
    { id: 3, name: 'third' },
    { id: 4, name: 'forth' },
    { id: 5, name: 'fifth' },
  ];

  tableHeadsCopy = [];

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
    // this.state$ = this.store.pipe(select(directorsState.filmDirectorsData));
    // this.selectedDirector$ = this.store.pipe(
    //   select(directorsState.selectedDirector)
    // );
    this.tableHeadsCopy = this.tableHeads.slice();
    this.elementFormControl.setValue(this.getFilteredSelectedHeads());
    this.itemSelected(this.elementFormControl.value);
  }

  // loadDirector(name: string) {
  //   this.store.dispatch(actions.loadFilmDirectorAction({ directorName: name }));
  // }

  itemSelected(items: any[]): void {
    this.elementFormControl.setValue(items);
    items.forEach((el) => {
      this.testData.find((i) => i.id === el.id).selected = el.selected;
    });
    this.setTableHeadsCopy(items);
  }

  private getFilteredSelectedHeads(): any[] {
    return this.testData.filter((el) => el['selected']);
  }

  private setTableHeadsCopy(items: any[]): any {
    this.tableHeadsCopy = this.tableHeads.slice().filter((el) => {
      return items.find((i) => el.id === i.id);
    });
  }
}
