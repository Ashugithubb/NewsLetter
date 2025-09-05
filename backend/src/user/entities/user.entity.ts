import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enum/user.enum";
import { Subscriber } from "src/subscribers/entities/subscriber.entity";
import { NewsLetter } from "src/news-letters/entities/news-letter.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column({ select: false })
    password: string

    @Column({ type: 'enum', enum: Role })
    role: Role

    @OneToOne(() => Subscriber, (s) => s.user)
    subscriber: Subscriber


    @OneToMany(() => NewsLetter, (n) => n.admin)
    newsLetter: NewsLetter
}
