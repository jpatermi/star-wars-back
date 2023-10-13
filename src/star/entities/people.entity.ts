import { IPeople, Result } from '../interfaces/people.interface';

export class People implements IPeople {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}
