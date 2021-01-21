import { Injectable } from "@nestjs/common";
import { SequelizeModuleOptions, SequelizeOptionsFactory } from "@nestjs/sequelize";
import { CatEntity } from "../../cats/cat.entity";

@Injectable()
export class SequelizeOptions implements SequelizeOptionsFactory {
    createSequelizeOptions(): Promise<SequelizeModuleOptions> | SequelizeModuleOptions {
        return {
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
            autoLoadModels: true,
            synchronize: true,
        };
    }
}
