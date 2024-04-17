import { Repository } from 'typeorm';
import { BaseRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  protected readonly logger = new Logger(UserRepository.name);

  constructor(
    @InjectRepository(User)
    protected readonly reservationRepository: Repository<User>,
  ) {
    super(reservationRepository);
  }
}
