const Search = ({ onChange, searchTerm }) => {
  return (
    <div className="relative">
      {/*<input*/}
      {/*  type="text"*/}
      {/*  id="Search"*/}
      {/*  value={val}*/}
      {/*  onChange={onChange}*/}
      {/*  placeholder="Search for..."*/}
      {/*  className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"*/}
      {/*/>*/}

      <input
        type="text"
        placeholder="Search for..."
        value={searchTerm}
        onChange={onChange}
        className="max-w-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
