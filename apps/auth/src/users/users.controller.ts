import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CurrentUser } from '../strategies/current-user.decorator';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getCurrentUser(@CurrentUser() user: User) {
    return user;
  }
}
