import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { People, Film, Planet } from './entities/';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class StarService {
  private readonly logger = new Logger(StarService.name);
  private urlBase = 'https://swapi.dev/api';
  constructor(private readonly httpService: HttpService) {}

  async findAllPeople(page: number): Promise<People[]> {
    const param = page ? '/?page=' + page : '';
    const { data } = await firstValueFrom(
      this.httpService.get<People[]>(this.urlBase + '/people' + param).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  async findAllFilm(page: number): Promise<Film[]> {
    const param = page ? '/?page=' + page : '';
    const { data } = await firstValueFrom(
      this.httpService.get<Film[]>(this.urlBase + '/films' + param).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  async findAllPlanet(page: number): Promise<Planet[]> {
    const param = page ? '/?page=' + page : '';
    const { data } = await firstValueFrom(
      this.httpService.get<Planet[]>(this.urlBase + '/planets' + param).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
