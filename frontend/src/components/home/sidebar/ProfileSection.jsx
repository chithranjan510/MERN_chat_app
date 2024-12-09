import { useAuthContext } from "../../../context/AuthContext";
import useLogout from "../../../hooks/useLogout";

const ProfileSection = () => {
  const { logout, loading } = useLogout();
  const { userAuthData } = useAuthContext();
  return (
    <div className="flex items-center justify-between gap-5 py-4 md:py-6 border-t-[1px] border-gray-700">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full">
          <img src={userAuthData.profilePic} alt="profile pic" />
        </div>
        <p className="font-bold text-lg capitalize text-ellipsis">
          {userAuthData.fullName}
        </p>
      </div>
      <div
        className="flex items-center justify-center h-10 w-10 bg-gray-600 hover:bg-gray-700 rounded-full cursor-pointer"
        onClick={() => {
          if (!loading) {
            logout();
          }
        }}
      >
        {loading ? (
          <span className="loading loading-spinner" />
        ) : (
          <i className="fa-solid fa-right-from-bracket" />
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
