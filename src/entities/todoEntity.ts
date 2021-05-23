import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export type TodoStatus = "Todo" | "Doing" | "Done" | "Stop";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn({ type: "int" })
  id?: number;

  @Column({ type: "varchar", length: "500" })
  name: string;

  @Column({ type: "int", nullable: true })
  estimate?: number | null;

  @Column({ type: "int", nullable: true })
  actual?: number | null;

  @Column({ type: "varchar", length: 10, default: "Todo" })
  status?: TodoStatus;

  @CreateDateColumn({ type: "datetime" })
  createdAt?: Date;

  @UpdateDateColumn({ type: "datetime" })
  updatedAt?: Date;

  @DeleteDateColumn({ type: "datetime", nullable: true })
  deletedAt?: Date | null;
}
