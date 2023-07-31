import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const isDuplicateByUsername = this.userService.isDuplicateByUsername(
      createUserDto.username,
    );
    if (isDuplicateByUsername) throw new BadRequestException();

    const user = await this.userService.crateUser(createUserDto);
    if (!user) throw new InternalServerErrorException();
    return {
      success: true,
    };
  }
}
