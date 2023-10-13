import { Module } from '@nestjs/common';
import { StarService } from './star.service';
import { StarController } from './star.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [StarController],
  imports: [HttpModule],
  providers: [StarService],
})
export class StarModule {}
