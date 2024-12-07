const SearchUser = () => {
  return (
    <form className="border-b-[1px] border-gray-700 flex items-center gap-2 pt-2 pb-6 relative">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none rounded-full py-2 pl-4 pr-[60px] w-full text-black"
      />
      <button className="absolute right-0 rounded-[0_50%_50%_0] w-[50px] flex items-center justify-center text-gray-500">
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  );
};

export default SearchUser;
