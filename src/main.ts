import { NestFactory } from "@nestjs/core";
import dotenv from "dotenv";

async function JobIndexer() {
  const app = await NestFactory.create({});
  dotenv.config();

  app.listen(process.env.MVC_PORT);
}
JobIndexer();
