import { Module } from "@nestjs/common";
import { ControllerModule } from "./controller/Controller.module";

@Module({
  imports: [ControllerModule],
})
export class AppModule {}
