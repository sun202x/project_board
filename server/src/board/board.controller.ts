import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {

    constructor(private boardService: BoardService) {}

    @Get("getBoard")
    // @Param()
    getBoard(@Req() request: Request) {
        return 'This is board Controller';
    }

    @Post("saveBoard")
    saveBoard() {
        this.boardService.create({
            id: "id",
            title: "test",
            contents: "Hello, This is test contents",
            writer: "user"
        });
    }

    @Post()
    updateBoard() {

    }

}
