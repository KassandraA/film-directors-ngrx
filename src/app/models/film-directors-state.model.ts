import { User } from './user.model';
import { FilmDirectorHttpModel } from './film-director-http.model';
import { Pack } from '../shared/models';

export interface FilmDirectorsData {
  user: User;
  filmDirectorsList: FilmDirectorHttpModel[];
  selectedFilmDirector: FilmDirectorHttpModel;
}

export type IFilmDirectorsState = Pack<FilmDirectorsData>;
