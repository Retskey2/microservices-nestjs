import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';
import { BaseRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReservationsRepository extends BaseRepository<Reservation> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectRepository(Reservation)
    protected readonly reservationRepository: Repository<Reservation>,
  ) {
    super(reservationRepository);
  }
}
