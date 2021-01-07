import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app.module";
import { TimeoutInterceptor } from "./common/interceptors/timeout.interceptor";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {

    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useGlobalInterceptors(new TimeoutInterceptor())
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(4000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}


bootstrap().catch((e) => {
    console.error(`Bootstrap Error => ${e}`);
});

