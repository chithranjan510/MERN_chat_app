import { useRef, useState } from "react";
import useSendMessage from "../../../hooks/useSendMessage";
import EmojiPicker from "emoji-picker-react";

const SendMessage = () => {
  const { loading, sendMessage } = useSendMessage();

  const inputRef = useRef();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = async (e) => {
    if (loading) {
      return;
    }

    e.preventDefault();

    const message = inputRef.current.value;

    if (!message) {
      return;
    }

    await sendMessage(message.trim());

    inputRef.current.value = "";
  };

  return (
    <form
      className="flex w-full items-center p-4 md:p-6"
      onSubmit={handleSendMessage}
    >
      <div className="relative flex w-full gap-3 bg-white rounded-md">
        <div
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          className="cursor-pointer w-[60px] bg-slate-200 flex items-center justify-center text-2xl rounded-l-md"
        >
          🌋
        </div>
        <input
          type="text"
          placeholder="Send message..."
          ref={inputRef}
          className="outline-none rounded-lg py-3 w-full text-black bg-white"
        />
        <button
          type="submit"
          className="cursor-pointer w-[60px] flex items-center justify-center bg-slate-200 text-gray-500 rounded-r-md"
        >
          {loading ? (
            <span className="loading loading-spinner" />
          ) : (
            <i className="fa-solid fa-paper-plane fa-lg" />
          )}
        </button>
        {showEmojiPicker && (
          <div className="absolute z-10 bottom-14 hello">
            <EmojiPicker
              skinTonesDisabled
              searchDisabled
              width={300}
              height={350}
              onEmojiClick={(e) => {
                inputRef.current.value = inputRef.current.value + e.emoji;
                setShowEmojiPicker(false);
                inputRef.current.focus();
              }}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default SendMessage;
