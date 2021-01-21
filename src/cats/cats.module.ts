import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CatEntity } from "./cat.entity";
import { CatsController } from "./cats.controller";
import { CatsResolvers } from "./cats.resolvers";
import { CatsService } from "./cats.service";

@Module({
    imports: [SequelizeModule.forFeature([CatEntity])],
    controllers: [CatsController],
    providers: [CatsService, CatsResolvers],
    exports:[SequelizeModule]
})
export class CatsModule { }
