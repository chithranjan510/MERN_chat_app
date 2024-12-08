const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center  text-gray-200 font-semibold flex flex-col items-center gap-6 sm:text-xl md:text-3xl lg:text-4xl">
        <p>Welcome 👋 Chithranjan Kumar</p>
        <p>Select a chat to start messaging</p>
        <i
          className="fa-brands fa-rocketchat fa-xl sm:mt-3 md:mt-5 lg:mt-7"
        ></i>
      </div>
    </div>
  );
};

export default NoChatSelected;
