import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { CatsModule } from "./cats/cats.module";
// import { DatabaseModule } from './database/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatEntity } from "./cats/cat.entity";

require('dotenv').config();

@Module({
    imports: [

        SequelizeModule.forRoot({
            dialect: "postgres",
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 30000,
                evict: 30000,
            },
            host: process.env.DB_HOST,
            port: (process.env.DB_PORT as unknown) as number,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            native: false,
            logging: false,
            ssl: true,
            autoLoadModels:true,
            synchronize:true,
            models: [CatEntity]
        }),
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            context: ({ req, res }) => ({ req, res }),
            debug: true,
            playground: false,
            typePaths: ["./**/*.graphql"],
        }),
        // DatabaseModule,
        CatsModule,


    ],
})
export class AppModule { }
