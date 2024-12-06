import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/message.route.js";
import authMiddleware from "./middleware/auth.middleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(authMiddleware);

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  try {
    connectToMongoDB();
    console.log(`Server listening to port: ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
