import { useAuthContext } from "../../../context/AuthContext";

const UserDetail = ({ setSelectedUser }) => {
  const { userAuthData } = useAuthContext();
  return (
    <div className="flex items-center sm:justify-between md:justify-center pt-4 pb-8">
      <div
        className="w-9 h-9 rounded-full bg-slate-500 flex items-center justify-center cursor-pointer md:hidden"
        onClick={() => setSelectedUser(null)}
      >
        <i className="fa-solid fa-arrow-left" />
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 rounded-full">
          <img src={userAuthData.profilePic} alt="profile pic" />
        </div>
        <p className="font-bold capitalize text-lg">{userAuthData.fullName}</p>
      </div>
    </div>
  );
};

export default UserDetail;
