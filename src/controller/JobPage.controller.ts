import { Controller, Get, Res } from "@nestjs/common";
import { renderToString } from "react-dom/server";
import { PageStructure } from "../components/PageStructure";
import { jobPage } from "../components/pages/Job";
import { Response } from "express";

@Controller("/job")
export class JobPageController {
  @Get("/")
  async render(@Res() res: Response) {
    const http = renderToString(PageStructure({ children: jobPage() }));
    res.send(http);
  }
}
