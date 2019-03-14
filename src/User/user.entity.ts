import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';

import { RoleEntity } from '../role/role.entity';

@Entity('tbluser')
export class UserEntity {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ length: 75, unique: true })
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

    @Column('int')
    userCreatedBy: number;

    @Column('int')
    userUpdatedBy: number;

    @Column('int')
    userDeletedBy: number;

    @CreateDateColumn()
    userCreatedDate: Date;

    @CreateDateColumn()
    userUpdatedDate: Date;

    @CreateDateColumn()
    userDeletedDate: Date;

    @ManyToOne(type => RoleEntity, role => role.roleId)
    user: RoleEntity;
}
