import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoardDocument = Board & Document;

@Schema()
export class Board {

    @Prop()
    id: string;

    @Prop()
    writer: string;

    @Prop()
    title: string;

    @Prop()
    contents: string;

}

export const BoardSchema = SchemaFactory.createForClass(Board);