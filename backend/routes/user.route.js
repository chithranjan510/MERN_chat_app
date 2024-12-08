import { Router } from "express";
import {
  getUserData,
  getUsersForSidebar,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsersForSidebar);

userRouter.get("/getUserData", getUserData);

export default userRouter;
