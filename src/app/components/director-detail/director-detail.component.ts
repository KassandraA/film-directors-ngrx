import { Component, OnInit, Input } from '@angular/core';
import { FilmDirectorHttpModel } from 'src/app/models';

@Component({
  selector: 'app-director-detail',
  templateUrl: './director-detail.component.html',
  styleUrls: ['./director-detail.component.scss'],
})
export class DirectorDetailComponent implements OnInit {
  @Input() selectedDirector: FilmDirectorHttpModel;

  constructor() {}

  ngOnInit(): void {}
}
