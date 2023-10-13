import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarModule } from './star/star.module';

@Module({
  imports: [StarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
