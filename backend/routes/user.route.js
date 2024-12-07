import { Router } from "express";
import getUsersForSidebar from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsersForSidebar);

export default userRouter;
