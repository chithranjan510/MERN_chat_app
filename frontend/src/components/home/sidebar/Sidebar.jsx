import useConversation from "../../../zustandStore/useConversation";
import ProfileSection from "./ProfileSection";
import SearchUser from "./SearchUser";
import UsersContainer from "./UsersContainer";

const Sidebar = () => {
  const { selectedConversation } = useConversation();

  return (
    <div
      className={`p-4 max-h-screen overflow-y-hidden flex flex-col ${
        selectedConversation && "hidden sm:hidden"
      } md:flex`}
      style={{
        background:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5) 95%, transparent)",
      }}
    >
      <SearchUser />
      <UsersContainer />
      <ProfileSection />
    </div>
  );
};

export default Sidebar;
