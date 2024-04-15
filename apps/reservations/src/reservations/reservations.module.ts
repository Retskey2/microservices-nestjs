import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule } from '@app/common';
import { Reservation } from './entities/reservation.entity';
import { ReservationsRepository } from './reservations.repository';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([Reservation])],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
