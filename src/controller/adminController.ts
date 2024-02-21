import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

export const upload = asyncHandler((req: Request, res: Response) => {
    // console.log(req.body);
    res.send("upload")
})      