import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    BoardModule,
    MongooseModule.forRoot('mongodb+srv://user:1q2w3e4r@projectboard.3luwu.mongodb.net/ProjectBoard?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
