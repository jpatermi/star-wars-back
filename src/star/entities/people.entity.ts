import { People, Result } from '../interfaces/people.interface';

export class Star implements People {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}
