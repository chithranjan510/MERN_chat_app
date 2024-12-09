import useConversation from "../../../zustandStore/useConversation";
import ProfileSection from "./ProfileSection";
import SearchUser from "./SearchUser";
import UsersContainer from "./UsersContainer";

const Sidebar = () => {
  const { selectedConversation } = useConversation();

  return (
    <div
      className={`max-h-screen overflow-y-hidden flex flex-col ${
        selectedConversation && "hidden sm:hidden"
      } md:flex`}
      style={{
        background:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5) 95%, transparent)",
      }}
    >
      <div className="px-4 md:px-6">
        <SearchUser />
      </div>
      <UsersContainer />
      <div className="px-4 md:px-6">
        <ProfileSection />
      </div>
    </div>
  );
};

export default Sidebar;
