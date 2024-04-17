import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { Reservation } from './entities/reservation.entity';
import { ReservationsRepository } from './reservations.repository';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([Reservation]),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        // POSTGRES_HOST: Joi.string().required(),
        // POSTGRES_PORT: Joi.number().required(),
        // POSTGRES_USER: Joi.string().required(),
        // POSTGRES_PASSWORD: Joi.string().required(),
        // POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
