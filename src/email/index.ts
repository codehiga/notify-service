import { Request, Response, Router } from "express";

export const emailRoute = Router();

emailRoute.post("/", ({ body }: Request, res: Response) => {});
