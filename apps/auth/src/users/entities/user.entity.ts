import { BaseEntity } from '@app/common';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;
}
