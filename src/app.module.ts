import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KanbanBoardModule } from './kanban-board/kanban-board.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://selectjun:ZRTVlwmm98tpAbbt@cluster0.7mk8tmp.mongodb.net/kanban-board?retryWrites=true&w=majority',
    ),
    KanbanBoardModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
