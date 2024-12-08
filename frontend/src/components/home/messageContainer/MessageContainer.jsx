/* eslint-disable react/prop-types */

import MessageBox from "./MessageBox";
import NoChatSelected from "./NoChatSelected";
import SendMessage from "./SendMessage";
import UserDetail from "./UserDetail";

const MessageContainer = ({ selectedUser, setSelectedUser }) => {
  return (
    <div
      className={`p-4 max-h-screen overflow-y-hidden flex flex-col sm:${
        selectedUser ? "flex" : "hidden"
      } md:flex`}
    >
      {selectedUser ? (
        <>
          <UserDetail setSelectedUser={setSelectedUser} />
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
