import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { renderToString } from "react-dom/server";
import { PageStructure } from "../components/PageStructure";
import { Register } from "../components/pages/Register";

@Controller("/register")
export class RegisterPageController {
  @Get("/")
  async renderPage(@Res() response: Response) {
    const page = renderToString(PageStructure({ children: Register() }));
    response.send(page);
  }
}
