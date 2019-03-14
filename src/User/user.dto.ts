import { IsEmail, IsNotEmpty, IsDate, Length, IsInt, Max, Min } from 'class-validator';

export class UserDTO {
    @Length(8, 20)
    userName: string;

    @IsEmail()
    userEmail: string;

    @IsNotEmpty()
    userPassword: string;

    @IsInt()
    @Min(10)
    @Max(13)
    userMobile: number;

    @IsDate()
    userDOB: Date;

    @IsNotEmpty()
    userGender: 'M' | 'F';

    @IsInt()
    createdBy: number;
}
