import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import * as mongoose from 'mongoose';

// KanbanBoard Type 생성
export type KanbanBoardDocument = HydratedDocument<KanbanBoard>;

@Schema()
export class KanbanBoard {
  @Prop({ type: String, default: '' })
  title: string;

  @Prop({ type: String, default: '' })
  content: string;

  @Prop({
    type: String,
    enum: ['TODO', 'IN_PROGRESS', 'DONE'],
    default: 'TODO',
  })
  status: string;

  @Prop({ type: Boolean, default: true })
  isActivate: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: KanbanBoard.name, // ref: 외래키
  })
  createBy: Types.ObjectId;

  @Prop({ type: Date, required: true, default: new Date() })
  createAt: Date;

  @Prop({ type: Date, required: true, default: new Date() })
  updateAt: Date;
}

// KanbanBoardSchema 반환
export const KanbanBoardSchema = SchemaFactory.createForClass(KanbanBoard);
