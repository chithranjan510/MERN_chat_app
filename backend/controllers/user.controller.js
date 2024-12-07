import { UserModel } from "../models/user.model.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const allRegisteredUsers = await UserModel.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(allRegisteredUsers);
  } catch (error) {
    console.error("Get user getUsersForSidebar: ", error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

export default getUsersForSidebar;
