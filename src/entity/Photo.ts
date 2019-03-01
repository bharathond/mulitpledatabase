import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({length:75})
    name : string;

    @Column('text')
    description : string;

    @Column('text')
    fullName : string;

    @Column()
    views : number;

    @Column()
    isPublished : boolean;
}