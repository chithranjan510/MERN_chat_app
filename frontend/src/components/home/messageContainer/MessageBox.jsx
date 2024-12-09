import { useAuthContext } from "../../../context/AuthContext";
import useGetMessages from "../../../hooks/useGetMessages";
import useConversation from "../../../zustandStore/useConversation";
import StartConversation from "./StartConversation";

const MessageBox = () => {
  const { userAuthData } = useAuthContext();
  const { loading, messages } = useGetMessages();
  const { selectedConversation } = useConversation();

  if (loading) {
    return (
      <div className="flex flex-col flex-grow items-center justify-center">
        <span className="loading loading-lg loading-spinner bg-white" />
      </div>
    );
  }

  if (messages.length === 0) {
    return <StartConversation />;
  }

  return (
    <div className="flex flex-col flex-grow py-4 gap-5 overflow-y-auto">
      {messages.map((message, index) => {
        return (
          <div
            key={index}
            className={`chat ${
              userAuthData._id === message.senderId ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 h-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={
                    userAuthData._id === message.senderId
                      ? userAuthData.profilePic
                      : selectedConversation.profilePic
                  }
                />
              </div>
            </div>
            <div
              className={`chat-bubble max-w-[90%] ${
                userAuthData._id === message.senderId ? "bg-slate-500":"bg-sky-700"
              }`}
            >
              {message.message}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageBox;
