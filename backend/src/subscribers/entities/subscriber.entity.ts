import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("subscribers")
export class Subscriber {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    subscribed: boolean


    @OneToOne(()=>User,(u)=>u.subscriber)
    @JoinColumn({name:"userId"})
    user:User
}
