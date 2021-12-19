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

    @Post()
    saveBoard() {
        
    }

    @Post()
    updateBoard() {

    }

}
