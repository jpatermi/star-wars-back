import { IPlanet, Result } from '../interfaces/planet.interface';

export class Planet implements IPlanet {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}
