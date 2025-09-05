import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../enum/news-letter.enum";
import { User } from "src/user/entities/user.entity";

@Entity("news_letters")
export class NewsLetter {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    description:string

    @Column({ type: 'enum', enum: Status })
    status:Status

    @Column()
    emailContent:string

    @ManyToOne(()=>User,(u)=>u.newsLetter)
    admin:User

}
