// charging-connector.dto.ts
import { IsNotEmpty, IsIn, IsNumber } from 'class-validator';

export class ChargingConnectorDto {
    @IsNotEmpty()
    identifier: string;

    @IsNotEmpty()
    @IsIn(['CCS', 'CHAdeMO', 'Type1', 'Type2'])
    type: string;

    @IsNotEmpty()
    @IsNumber()
    maxPowerKW: number;
}
