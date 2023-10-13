import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { People } from './entities/people.entity';
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
}
