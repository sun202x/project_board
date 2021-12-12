import { Controller, Get } from '@nestjs/common';

@Controller('board')
export class BoardController {

    @Get()
    getBoard() {
    return 'This is board Controller';
    }

}
