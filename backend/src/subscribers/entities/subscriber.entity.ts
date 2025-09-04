import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("subscribers")
export class Subscriber {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    subscribed: boolean

}
