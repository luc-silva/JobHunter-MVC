import { NestFactory } from "@nestjs/core";
import { AppModule } from "./App.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import dotenv from "dotenv";
import { join } from "node:path";

async function JobIndexer() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  dotenv.config();

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.listen(process.env.MVC_PORT);
}
JobIndexer();
