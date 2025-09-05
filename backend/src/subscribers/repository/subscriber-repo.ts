import { Injectable } from "@nestjs/common";
import { Admin, DataSource, Repository } from "typeorm";
import { Subscriber } from "../entities/subscriber.entity";


@Injectable()
export class SubscriberRepository extends Repository<Subscriber> {
    constructor(private datasource: DataSource,
    ) {
        super(Subscriber, datasource.createEntityManager());
    }

}