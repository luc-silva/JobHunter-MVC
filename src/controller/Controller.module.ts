import { Module } from "@nestjs/common";
import { HomePageController } from "./HomePage.controller";
import { LoginController } from "./Login.controller";
import { RegisterPageController } from "./RegisterPage.controller";

@Module({
  controllers: [HomePageController, LoginController, RegisterPageController],
})
export class ControllerModule {}
