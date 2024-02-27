import {ArrayMaxSize, IsBoolean, IsNotEmpty, IsNumber, IsString, ValidateIf, ValidateNested} from 'class-validator';
import {Type} from "class-transformer";
import {ChargingConnectorDto} from "./charging-connector.dto";

export class StationDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsBoolean()
  isPublic: boolean;

  @ValidateIf(o => o.isPublic === true)
  @IsNotEmpty()
  @IsString()
  description: string;

  @ValidateIf(o => o.isPublic === true)
  @IsNotEmpty()
  @IsString()
  address: string;

  @ValidateIf(o => o.isPublic === true)
  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @ValidateIf(o => o.isPublic === true)
  @IsNotEmpty()
  @IsNumber()
  longitude: number;

  @ArrayMaxSize(8)
  @ValidateNested({ each: true })
  @Type(() => ChargingConnectorDto)
  chargingConnectors: ChargingConnectorDto[];
}
