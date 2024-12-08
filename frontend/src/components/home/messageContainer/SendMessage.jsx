const SendMessage = () => {
  return (
    <form className="relative flex items-center gap-2 pt-6 pb-4">
      <input
        type="text"
        placeholder="Send message..."
        className="outline-none rounded-lg py-3 pl-5 pr-[65px] w-full text-black"
      />
      <button className="absolute right-0 w-[60px] flex items-center justify-center text-gray-500">
        <i className="fa-solid fa-paper-plane fa-lg"></i>
      </button>
    </form>
  );
};

export default SendMessage;
