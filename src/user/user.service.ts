import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

/**
 * 사용자 Service
 */
@Injectable()
export class UserService {
  /**
   * 생성자
   * @param userModel 사용자 Model
   */
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async crateUser(createUserDto: CreateUserDto) {
    return await this.userModel.create({
      ...createUserDto,
    });
  }

  async countUserByUsername(username: string) {
    return await this.userModel.find({ username }).count();
  }

  async isDuplicateByUsername(username: string) {
    return (await this.countUserByUsername(username)) > 0;
  }

  async findOne(username: string) {
    return await this.userModel.findOne({ username }).lean(); // 데이터만 가져오기
  }
}
