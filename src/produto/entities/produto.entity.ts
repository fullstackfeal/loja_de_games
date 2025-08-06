import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @IsNotEmpty()
  @Column({length: 100, nullable: false })
  descricao: string;

  @ManyToOne(() =>  Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE'
  })
  categoria: Categoria
}