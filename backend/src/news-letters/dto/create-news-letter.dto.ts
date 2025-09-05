import { IsEnum, IsString } from "class-validator";
import { Status } from "../enum/news-letter.enum";

export class CreateNewsLetterDto {
    @IsString()
    title: string

    @IsString()
    description: string

    @IsEnum(Status)
    status: Status

    @IsString()
    emailContent: string
}
