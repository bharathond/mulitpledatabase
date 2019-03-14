import { Controller, Get, Post, Put, Delete, Body, Param, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

import { validate } from 'class-validator';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getAllUsers() {
        return await this.userService.getAllUsers();
    }

    @Get(':id')
    async getUser(@Param('id') id: number) {
        return await this.userService.getUser(id);
    }

    @Post('createuser')
    async createUser(@Body() data: UserDTO) {
        return this.userService.createUser(data);
    }

    @Put('updateuser/:id')
    async updateUser(@Param() id: number, @Body() data: Partial<UserDTO>) {
        return await this.userService.updateUser(id, data);
    }

    @Delete(':id')
    async deleteUser(@Param() id: number) {
        return await this.userService.deleteUser(id);
    }
}
