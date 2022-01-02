import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { Board, BoardSchema } from './schemas/board.schema';

@Module({
  imports: [
    // 현재 모듈에 필요한 모델 정의
    MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }])
  ],
  controllers: [BoardController],
  providers: [BoardService],
  // 외부모듈에서 필요하다면 exports 한다.
  // exports: [ MongooseModule ]
})
export class BoardModule {}
