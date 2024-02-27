import {Injectable, NotFoundException} from '@nestjs/common';
import {StationEntity} from "./entities/station.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateStationDto} from "./dto/create-station.dto";

@Injectable()
export class ValidatorService {
  constructor(
      @InjectRepository(StationEntity)
      private readonly stationRepository: Repository<StationEntity>,
  ) {}

  async createStation(createStationDto: CreateStationDto): Promise<StationEntity> {
    const station = this.stationRepository.create(createStationDto);
    return await this.stationRepository.save(station);
  }

  async deleteStation(id: number): Promise<void> {
    const station = await this.stationRepository.findOne({where :{id}});
    if (!station) {
      throw new NotFoundException(`${id} not found!( `);
    }
    await this.stationRepository.remove(station);
  }
}
