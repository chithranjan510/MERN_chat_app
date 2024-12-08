/* eslint-disable react/prop-types */
const UserDetail = ({ setSelectedUser }) => {
  return (
    <div className="flex items-center sm:justify-between md:justify-center pt-4 pb-8">
      <div
        className="w-9 h-9 rounded-full bg-slate-500 flex items-center justify-center cursor-pointer md:hidden"
        onClick={() => setSelectedUser(null)}
      >
        <i className="fa-solid fa-arrow-left" />
      </div>
      <div className="flex items-center gap-3">
        <i className="fa-solid fa-house"></i>
        <p>Username</p>
      </div>
    </div>
  );
};

export default UserDetail;
