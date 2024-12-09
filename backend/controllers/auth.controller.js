import bcrypt from "bcryptjs";
import { UserModel } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "password and confirm password must be same" });
    }

    const user = await UserModel.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const defaultProfilePicUrl = `https://avatar.iran.liara.run/public/${
      gender === "male" ? "boy" : "girl"
    }?username=${username}`;

    const newUser = await UserModel.create({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: defaultProfilePicUrl,
    });

    generateTokenAndSetCookie(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Signup error: ", error);
    if (error.name === "ValidationError") {
      return res.status(500).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "Invalid username" });
    }

    const isPassswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPassswordCorrect) {
      return res.status(400).json({ error: "Incorrect Password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Login error: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logged out successfully" });
};
