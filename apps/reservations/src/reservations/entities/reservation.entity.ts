import { BaseEntity } from '@app/common';
import { Entity, Column } from 'typeorm';

@Entity()
export class Reservation extends BaseEntity {
  @Column({ type: 'timestamp', nullable: false })
  startDate: Date;

  @Column({ type: 'timestamp', nullable: false })
  endDate: Date;

  @Column({ type: 'varchar', nullable: false })
  userId: string;

  @Column({ type: 'varchar', nullable: false })
  placeId: string;

  @Column({ type: 'varchar', nullable: false })
  invoiceId: string;
}
