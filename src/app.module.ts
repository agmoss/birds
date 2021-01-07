import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { CatsModule } from "./cats/cats.module";
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            context: ({ req, res }) => ({ req, res }),
            debug: true,
            playground: false,
            typePaths: ["./**/*.graphql"],
        }),
        DatabaseModule,
        CatsModule,
    ],
})
export class AppModule { }
