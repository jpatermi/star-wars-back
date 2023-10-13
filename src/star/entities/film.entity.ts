import { IFilm, Result } from '../interfaces/film.interface';

export class Film implements IFilm {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}
