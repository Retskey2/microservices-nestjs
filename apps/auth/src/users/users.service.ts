import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repositories';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDTO) {
    console.log(createUserDto);
    return this.userRepository.create({
      ...createUserDto,
    });
  }
}
