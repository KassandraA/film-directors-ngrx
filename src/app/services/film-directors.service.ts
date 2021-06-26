import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FilmDirectorHttpModel } from '../models';
import { Envelope } from '../shared/models';
import { MyHttpService } from '../shared/services.ts';

@Injectable()
export class FilmDirectorsService {
  protected readonly PATH_WIKI =
    'https://en.wikipedia.org/api/rest_v1/page/summary/';

  constructor(private httpService: MyHttpService) {}

  loadFilmDirectorByName(
    name: string
  ): Observable<Envelope<FilmDirectorHttpModel>> {
    const url = this.PATH_WIKI + name;

    const res = this.httpService.get(url) as Observable<
      Envelope<FilmDirectorHttpModel>
    >;
    // console.log('service', res);
    return res;
  }
}
