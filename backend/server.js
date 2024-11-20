import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

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
