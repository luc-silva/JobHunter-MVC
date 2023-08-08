import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { PageStructure } from "../components/PageStructure";
import { renderToString } from "react-dom/server";
import { Index } from "../components/pages/Index";

@Controller("/")
export class HomePageController {
  @Get("/")
  async home(@Res() res: Response) {
    const html = renderToString(PageStructure({ children: Index() }));
    res.send(html);
  }
}
