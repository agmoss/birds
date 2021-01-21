import { Injectable } from "@nestjs/common";
import { GqlModuleOptions, GqlOptionsFactory } from "@nestjs/graphql";

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
    createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
        return {
            installSubscriptionHandlers: true,
            context: ({ req, res }) => ({ req, res }),
            debug: true,
            playground: false,
            typePaths: ["./**/*.graphql"],
        };
    }
}
