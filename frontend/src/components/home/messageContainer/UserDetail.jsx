import useConversation from "../../../zustandStore/useConversation";

const UserDetail = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <div className="flex items-center justify-between md:hidden p-4 md:p-6">
      <div
        className="w-9 h-9 rounded-full bg-slate-500 flex items-center justify-center cursor-pointer"
        onClick={() => setSelectedConversation(null)}
      >
        <i className="fa-solid fa-arrow-left" />
      </div>
      <div className="flex items-center gap-3">
        <p className="font-bold capitalize text-lg text-ellipsis">
          {selectedConversation.fullName}
        </p>
        <div className="w-10 h-10 rounded-full">
          <img src={selectedConversation.profilePic} alt="profile pic" />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
