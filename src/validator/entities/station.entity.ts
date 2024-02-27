import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'station-entity' })
@Index('idx_id_station', ['id'])
export class StationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;

    @Column({ type: 'varchar', length: 255 })
    address: string;

    @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
    latitude: number;

    @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
    longitude: number;

    @Column({ type: 'boolean', default: true })
    isPublic: boolean;

    @Column({ type: 'json', nullable: true })
    chargingConnectors: any;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;
}
