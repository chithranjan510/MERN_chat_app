import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - jwt token required" });
    }
    const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const userData = await UserModel.findById(userId).select("-password");

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = userData;

    next();
  } catch (error) {
    console.log("Auth Error: ", error);
    if (error.name === "JsonWebTokenError") {
      return res
        .status(403)
        .json({ error: "Unauthorized - Invalid JWT token" });
    }
    if (error.name === "TokenExpiredError") {
      return res
        .status(403)
        .json({ error: "Unauthorized - JWT token has expired" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export default authMiddleware;
