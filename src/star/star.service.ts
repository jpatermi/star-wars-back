import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Star } from './entities/people.entity';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class StarService {
  private readonly logger = new Logger(StarService.name);
  constructor(private readonly httpService: HttpService) {}

  async findAllPeople(): Promise<Star[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Star[]>('https://swapi.dev/api/people').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
