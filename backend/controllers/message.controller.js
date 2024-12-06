import { ConversationModel } from "../models/conversation.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversationData = await ConversationModel.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    res.send("hello world");
  } catch (error) {
    console.log("Send message error: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
