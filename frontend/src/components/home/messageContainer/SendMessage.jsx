import { useState } from "react";
import useSendMessage from "../../../hooks/useSendMessage";

const SendMessage = () => {
  const { loading, sendMessage } = useSendMessage();

  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    if (loading) {
      return;
    }

    e.preventDefault();

    if (!message) {
      return;
    }

    await sendMessage(message);

    setMessage("");
  };

  return (
    <form
      className="relative flex items-center gap-2 pt-4 md:pt-6 md:pb-4"
      onSubmit={handleSendMessage}
    >
      <input
        type="text"
        placeholder="Send message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="outline-none rounded-lg py-3 pl-5 pr-[65px] w-full text-black"
      />
      <button className="absolute right-0 w-[60px] flex items-center justify-center text-gray-500">
        {loading ? (
          <span className="loading loading-spinner" />
        ) : (
          <i className="fa-solid fa-paper-plane fa-lg"></i>
        )}
      </button>
    </form>
  );
};

export default SendMessage;
