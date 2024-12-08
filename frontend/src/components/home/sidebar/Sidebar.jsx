/* eslint-disable react/prop-types */
import ProfileSection from "./ProfileSection";
import SearchUser from "./SearchUser";
import UsersContainer from "./UsersContainer";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  return (
    <div
      className={`p-4 max-h-screen overflow-y-hidden flex flex-col sm:${
        selectedUser ? "hidden" : "flex"
      } md:flex`}
      style={{
        background:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5) 95%, transparent)",
      }}
    >
      <SearchUser />
      <UsersContainer
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <ProfileSection />
    </div>
  );
};

export default Sidebar;
