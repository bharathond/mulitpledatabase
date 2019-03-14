import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';

@Entity('tblrole')
export class RoleEntity {
    @PrimaryGeneratedColumn()
    roleId: number;

    @Column({ length: 100 })
    roleName: string;

    @OneToMany(() => UserEntity, user => user.user)
    userRoleId: UserEntity;
}
