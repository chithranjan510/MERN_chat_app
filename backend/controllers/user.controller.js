import { UserModel } from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const allRegisteredUsers = await UserModel.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(allRegisteredUsers);
  } catch (error) {
    console.error("Get user getUsersForSidebar: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserData = (req, res) => {
  const { fullName, username, profilePic, gender, _id } = req.user;
  res.status(200).json({ fullName, username, profilePic, _id, gender });
};
