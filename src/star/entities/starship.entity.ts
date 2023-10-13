import { IStarship, Result } from '../interfaces/starship.interface';

export class Starship implements IStarship {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}
