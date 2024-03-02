import { useState, useEffect } from "react";
import ReportsContainer from "./ReportsContainer.jsx";
import { _Input } from "./styles/Inputs.styled.js";
import { SearchBarContainer } from "./styles/ItemContainer.styled.js";

function SearchBar({ refresh, setRefresh }) {
  const [search, setSearch] = useState("");
  return (
    <section>
      <SearchBarContainer>
        <_Input
          type="text"
          placeholder="Search ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></_Input>
      </SearchBarContainer>
      <ReportsContainer
        search={search}
        refresh={refresh}
        setRefresh={setRefresh}
      ></ReportsContainer>
    </section>
  );
}
export default SearchBar;
