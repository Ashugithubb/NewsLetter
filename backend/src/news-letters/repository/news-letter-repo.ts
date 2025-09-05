import { Injectable } from "@nestjs/common";
import { Admin, DataSource, Repository } from "typeorm";
import { NewsLetter } from "../entities/news-letter.entity";

@Injectable()
export class NewsLetterRepository extends Repository<NewsLetter> {
    constructor(private datasource: DataSource,
    ) {
        super(NewsLetter, datasource.createEntityManager());
    }

}