import { useState, useEffect } from "react";
function SearchBar({ fetchReports, refresh }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    setSearch((search) => search);
    fetchReports(search);
  }, [refresh]);

  // todo connect to a serach button and send to reports container
  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetchReports(e.target.value);
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
