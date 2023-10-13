import { Controller, Get } from '@nestjs/common';
import { StarService } from './star.service';

@Controller('star-wars')
export class StarController {
  constructor(private readonly starService: StarService) {}

  @Get('people')
  findAllPeople() {
    return this.starService.findAllPeople();
  }
}
