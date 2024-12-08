/* eslint-disable react/prop-types */

const userArr = [1, 2, 3, 4];

const UsersContainer = ({ selectedUser, setSelectedUser }) => {
  return (
    <div className="flex flex-col flex-grow border-b-[1px] border-gray-700 py-6 gap-5 overflow-y-auto">
      {userArr.map((val, index) => {
        return (
          <div
            key={index}
            className={`flex items-center justify-between px-5 py-2 rounded-md hover:bg-gray-800 ${
              selectedUser === val && "bg-gray-800"
            }`}
            onClick={() => {
              setSelectedUser(val);
            }}
          >
            <div className="flex items-center gap-3">
              <div className="avatar online">
                <i className="fa-solid fa-house"></i>
              </div>
              <p>User Container</p>
            </div>
            <i className="fa-solid fa-house"></i>
          </div>
        );
      })}
    </div>
  );
};

export default UsersContainer;
