import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// User Type 생성
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true })
  nickname: string;

  @Prop({ type: Date, required: true, default: new Date() })
  createAt: Date;

  @Prop({ type: Date, required: true, default: new Date() })
  updateAt: Date;
}

// UserSchema 반환
export const UserSchema = SchemaFactory.createForClass(User);
