import express from "express";
import path from "path";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/message.route.js";
import authMiddleware from "./middleware/auth.middleware.js";
import userRouter from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const port = process.env.PORT || 5000;

const __dirname = path.resolve("../");

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", authMiddleware, messageRouter);
app.use("/api/user", authMiddleware, userRouter);

app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(port, async () => {
  try {
    connectToMongoDB();
    console.log(`Server listening to port: ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
