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
      'mongodb+srv://ggos3:jjiZK5PeFGyysS7c@cluster0.isgm2hw.mongodb.net/?retryWrites=true&w=majority',
    ),
    KanbanBoardModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
