import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { UserEntity } from './User/user.entity';

createConnection().then(async connection => {
    const users = await connection.manager.find(UserEntity);

}).catch(error => console.log(error));
