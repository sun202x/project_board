import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBoardDto } from './dto/create-board';
import { Board, BoardDocument } from './schemas/board.schema';

@Injectable()
export class BoardService {

    constructor(@InjectModel(Board.name) private boardModel: Model<BoardDocument>) { }

    async create(createBoardDto: CreateBoardDto): Promise<Board> {
        const createdBoard = new this.boardModel(createBoardDto);
        return createdBoard.save();
    }

    async findAll(): Promise<Board[]> {
        return this.boardModel.find().exec();
    }

}
