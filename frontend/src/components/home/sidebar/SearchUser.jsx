import useConversation from "../../../zustandStore/useConversation";

const SearchUser = () => {
  const { userSearchFilter, setUserSearchFilter } = useConversation();

  return (
    <div className="border-b-[1px] border-gray-700 flex items-center gap-2 py-4 md:py-6">
      <div className="w-full flex items-center gap-2 rounded-full bg-white overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none rounded-full py-2 pl-4 flex-grow text-black bg-white"
          value={userSearchFilter}
          onChange={(e) => setUserSearchFilter(e.target.value)}
        />
        <button className="w-[50px] h-[40px] flex items-center justify-center text-gray-500 bg-slate-200">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </div>
  );
};

export default SearchUser;
