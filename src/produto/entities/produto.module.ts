import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaModule } from "../../categoria/categoria.module";
import { ProdutoController } from "../controllers/produto.controller";
import { Produto } from "./produto.entity";
import { ProdutoService } from "../services/produto.service";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: [],
})
export class ProdutoModule { }