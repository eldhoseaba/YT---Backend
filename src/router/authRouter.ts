//authRouter.ts
import { Router } from "express";
import { login } from "../controller/authController";

const authRouter = Router();
authRouter.post("/login", login);

export default authRouter;
