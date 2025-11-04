import { IsString,Length,IsEmail,IsDate } from "class-validator"


export class Create{
    @IsString()
    @Length(5,255)
    id:string
    @IsString()
    name:string
    @IsEmail()
    email:string
    @IsString()
    password:string
}

export class FindOneParams{
    @IsString()
    @Length(1,255)
    id:string
}

export class Edit{
    
    @IsString()
    name:string
    @IsEmail()
    email:string
    @IsString()
    password:string
}