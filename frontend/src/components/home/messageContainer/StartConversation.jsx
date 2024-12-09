import useConversation from "../../../zustandStore/useConversation";

const StartConversation = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className="px-4 text-center text-gray-200 font-semibold flex h-full w-full items-center justify-center gap-6 sm:text-xl md:text-3xl lg:text-4xl">
      <div className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
        <p className="mb-4">Start a conversation</p>
        <p className="text-ellipsis">
          {`Send "Hi👋" to`}{" "}
          <span className="capitalize">
            {selectedConversation.fullName}
            {"...!!!"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default StartConversation;
