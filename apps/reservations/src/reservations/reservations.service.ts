import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from './reservations.repository';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRepository: ReservationsRepository,
  ) {}
  async create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId: '123', // for now just hard-code it
    });
  }

  findAll() {
    return this.reservationsRepository.findAll();
  }

  findOne(id: number) {
    return this.reservationsRepository.findById(id);
  }

  // update(id: number, updateReservationDto: UpdateReservationDto) {
  //   return `This action updates a #${id} reservation`;
  // }

  remove(id: number) {
    return this.reservationsRepository.delete(id);
  }
}
