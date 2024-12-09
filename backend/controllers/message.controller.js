import { ConversationModel } from "../models/conversation.model.js";
import { MessageModel } from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversationData = await ConversationModel.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversationData) {
      conversationData = await ConversationModel.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await MessageModel.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversationData.messages.push(newMessage._id);
    }

    await conversationData.save();

    res.status(201).json(conversationData);
  } catch (error) {
    console.log("Send message error: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;    

    const conversationData = await ConversationModel.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    const messages = conversationData ? conversationData.messages : [];

    res.status(200).json(messages);
  } catch (error) {
    console.log("Get message error: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
