import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async getAllUsers() {
        const user = await this.userRepository.find();
        // Logger.log(user);
        return user;
    }

    async getUser(id: number) {
        return await this.userRepository.findOne({
            select: ['userId', 'userName', 'userEmail', 'userMobile'],
            where: [{ userId: id }],
        });
    }

    async createUser(data: Partial<UserDTO>) {
        const userData = await this.userRepository.create(data);
        await this.userRepository.save(userData);
        return userData;
    }

    async updateUser(id: number, data: Partial<UserDTO>) {
        await this.userRepository.update({ userId: id }, data);
        const updatedData = this.userRepository.findOne({
            where: { userId: id },
        });
        return updatedData;
    }

    async deleteUser(id: number) {
        await this.userRepository.delete({ userId: id });
        return { deleted: true };
    }
}
