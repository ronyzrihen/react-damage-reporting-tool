import { useState, useEffect } from "react";
import Button from "./Button.jsx";
// import ReportsContainer from "./ReportsContainer.jsx";
function SearchBar({ setContainer }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    setSearch(search);
  }, []);

  // todo connect to a serach button and send to reports container
  const handleSearch = (e) => {
    setSearch(e.target.value);
    // setSearchTerm(e.target.value);
  };
  const handleButton = (e) => {
    e.preventDefault();
    setContainer(search);
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
      <Button onClick={handleButton} btnVal={"Search"} />
    </>
  );
}
export default SearchBar;
