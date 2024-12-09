import useGetAllUsers from "../../../hooks/useGetAllUsers";
import useConversation from "../../../zustandStore/useConversation";

const UsersContainer = () => {
  const { loading, allUsers } = useGetAllUsers();
  const { selectedConversation, setSelectedConversation } = useConversation();

  if (loading) {
    return (
      <div className="flex flex-col flex-grow items-center justify-center">
        <span className="loading loading-lg loading-spinner bg-white" />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-grow border-b-[1px] border-gray-700 py-6 gap-5 overflow-y-auto">
      {allUsers.map((user, index) => {
        return (
          <div
            key={index}
            className={`flex items-center px-5 py-2 gap-5 rounded-md hover:bg-gray-800 ${
              selectedConversation &&
              selectedConversation._id === user._id &&
              "bg-gray-800"
            }`}
            onClick={() => {
              setSelectedConversation(user);
            }}
          >
            <div className="avatar online">
              <div className="w-12 h-12 rounded-full">
                <img src={user.profilePic} alt="profile pic" />
              </div>
            </div>
            <p className="font-bold text-lg capitalize text-ellipsis">{user.fullName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersContainer;
