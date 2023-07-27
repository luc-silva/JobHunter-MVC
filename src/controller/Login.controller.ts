import { Controller, Get, Res } from "@nestjs/common";
import { renderToString } from "react-dom/server";
import { Login } from "../components/pages/Login";
import { PageStructure } from "../components/PageStructure";
import { Response } from "express";

@Controller("login")
export class LoginController {
  @Get("/")
  async getLoginPage(@Res() res: Response) {
    const html = renderToString(PageStructure({ children: Login() }));
    res.send(html);
  }
}
