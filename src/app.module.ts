import { Module } from '@nestjs/common';
import { ValidatorController } from './validator/validator.controller';
import { ValidatorService } from './validator/validator.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import {StationEntity} from "./validator/entities/station.entity";

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [StationEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([StationEntity]),
  ],
  controllers: [ValidatorController],
  providers: [ValidatorService],
})
export class AppModule {}
