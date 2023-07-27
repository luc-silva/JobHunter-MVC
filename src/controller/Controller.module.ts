import { Module } from "@nestjs/common";
import { HomePageController } from "./HomePage.controller";
import { LoginController } from "./Login.controller";

@Module({
  controllers: [HomePageController, LoginController],
})
export class ControllerModule {}
