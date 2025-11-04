import { Controller, Get,Post,Delete, Inject, Put, Body, Param, NotFoundException } from '@nestjs/common';
import { UserGetAll } from '../../application/UserGetAll/UserGetAll';
import { UserGetOneById } from '../../application/UserGetOneById/UserGetOneById';
import { UserCreate } from '../../application/UserCreate/UserCreate';
import { UserEdit } from '../../application/UserEdit/UserEdit';
import { UserDelete } from '../../application/UserDelete/UserDelete';
import { Create, Edit, FindOneParams } from './Validators';

import { UserErrorValue } from '../../domain/UserErrorValue';

@Controller('user')
export class UserController {

    constructor(
        @Inject("UserGetAll") private readonly UserGetAll: UserGetAll,
        @Inject("UserGetOneById") private readonly UserGetOneById: UserGetOneById,
        @Inject("UserCreate") private readonly UserCreate: UserCreate,
        @Inject("UserEdit") private readonly UserEdit: UserEdit,
        @Inject("UserDelete") private readonly UserDelete: UserDelete,
    ) { }

    @Get()
    async getAll(){
    return (await this.UserGetAll.run()).map((u)=>u.toPlainObject());
    }

    @Get(':id')
    async getOneById(@Param() Params:FindOneParams){
        try{
            return (await this.UserGetOneById.run(Params.id)).toPlainObject();
        }catch(error){
            if(error instanceof UserErrorValue){
                throw new NotFoundException();
            }
            throw error;
        }
    }

    @Post()
    async create(@Body() body:Create){
        return await this.UserCreate.run(
            body.id,
            body.name,
            body.email,
            body.password,
            new Date(),
        )
    }

    @Put(':id')
    async edit(@Param() Params:FindOneParams,@Body() body:Edit){
        return await this.UserEdit.run(
            Params.id,
            body.name,
            body.email,
            body.password,
            new Date(),
        )
    }
    @Delete(':id')
    async delete(@Param() Params:FindOneParams){
        return await this.UserDelete.run(
            Params.id
        )
    }

}
