import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  HttpException,
  HttpStatus,
  UsePipes,
  ValidationPipe, Req
} from '@nestjs/common';
import { ValidatorService } from './validator.service';
import { StationDto } from './dto/station.dto';

@Controller('stations')
export class ValidatorController {
  constructor(private readonly validatorService: ValidatorService) {}

  @Post('CreateNewStation')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createStation(@Body() body: StationDto) {
    await this.validatorService.createStation(body);
    return { message: `Station successfully created` };
  }

  @Delete(':id')
  async deleteStation(@Param('id') id: number) {
    try {
      await this.validatorService.deleteStation(id);
      return { success: true, message: 'Station successfully deleted' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
