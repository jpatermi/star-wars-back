import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    // TODO: Add ORIGIN_CORS as environment variable
    origin: 'http://localhost:3000',
  });

  await app.listen(3008);
}
bootstrap();
