import express from "express";
import { addChannel, upload } from "../controller/adminController";

const adminRouter = express.Router();

adminRouter.post("/upload", upload);
adminRouter.post("/addChannel", addChannel);

export default adminRouter;
