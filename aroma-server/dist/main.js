"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./core/app.module");
const cookieParser = require("cookie-parser");
const config_1 = require("@nestjs/config");
const cors_config_1 = require("./shared/configs/cors.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = await app.get(config_1.ConfigService);
    const corsOptions = await (0, cors_config_1.CorsConfig)(configService);
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.enableCors(corsOptions);
    await app.listen(configService.get('APP_PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map