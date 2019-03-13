import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tblrole')
export class RoleEntity {
    @PrimaryGeneratedColumn()
    roleId: number;

    @Column({ length: 100 })
    roleName: string;
}
