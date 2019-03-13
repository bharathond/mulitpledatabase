import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('tbluser')
export class UserEntity {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ length: 75 })
    userName: string;

    @Column({ length: 100 })
    userEmail: string;

    @Column({ length: 100 })
    userPassword: string;

    @Column('int')
    userMobile: number;

    @CreateDateColumn()
    userDOB: Date;

    @Column({ type: 'enum', enum: ['M', 'F'] })
    userGender: 'M' | 'F';

    @Column()
    userCreatedBy: string;

    @Column()
    userUpdatedBy: string;

    @Column()
    userDeletedBy: string;

    @CreateDateColumn()
    userCreatedDate: Date;

    @CreateDateColumn()
    userUpdatedDate: Date;

    @CreateDateColumn()
    userDeletedDate: Date;
}
