import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { SequelizeModule } from '@nestjs/sequelize';

import { GraphqlOptions } from "./config/graphql"
import { SequelizeOptions } from "./config/sequelize";
import { CatsModule } from "./cats/cats.module";

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            useClass: SequelizeOptions
        }),
        GraphQLModule.forRootAsync({
            useClass: GraphqlOptions
        }),
        CatsModule,
    ],
})
export class AppModule { }
