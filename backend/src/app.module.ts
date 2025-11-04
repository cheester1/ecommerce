import { Module } from '@nestjs/common';
import { UserModule } from './lib/Usuarios/infraestructure/nest.js/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmUserEntity } from './lib/Usuarios/infraestructure/TypeOrm/TypeOrmUserEntity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: "postgresql://postgres.drbwmphlrpqpeoosorta:familiaPOMA1@@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true",

      entities: [TypeOrmUserEntity],
      synchronize: true,
    }),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
