import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule, LoggerModule } from '@app/common';

import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([User]), LoggerModule],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
