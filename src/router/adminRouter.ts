import { Router } from "express";
import { upload } from "../controller/adminController";
const adminRouter = Router();

adminRouter.post("/upload", upload)

export default adminRouter