import useConversation from "../../../zustandStore/useConversation";
import MessageBox from "./MessageBox";
import NoChatSelected from "./NoChatSelected";
import SendMessage from "./SendMessage";
import UserDetail from "./UserDetail";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();

  return (
    <div
      className={`max-h-screen overflow-y-hidden flex flex-col ${
        !selectedConversation && "hidden sm:hidden"
      } md:flex`}
    >
      {selectedConversation ? (
        <>
          <UserDetail />
          <MessageBox />
          <SendMessage />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

export default MessageContainer;
