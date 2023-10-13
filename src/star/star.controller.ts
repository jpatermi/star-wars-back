import { Controller, Get, Query } from '@nestjs/common';
import { StarService } from './star.service';

@Controller('star-wars')
export class StarController {
  constructor(private readonly starService: StarService) {}

  @Get('people')
  findAllPeople(@Query('page') page: number) {
    return this.starService.findAllPeople(page);
  }
}
