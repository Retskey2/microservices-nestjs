import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations/reservations.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
