import { useState, useEffect } from "react";
function SearchBar({ setContainer }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    setSearch((search) => search);
  }, []);

  // todo connect to a serach button and send to reports container
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setContainer(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search ID"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </>
  );
}
export default SearchBar;
