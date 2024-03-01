import { useState, useEffect } from "react";
import ReportsContainer from "./ReportsContainer.jsx";
import { fetchReports } from "../service/apiRequests";
function SearchBar({ refresh, setRefresh }) {
  // todo check if theres a way to pass refresh directly to report
  const [search, setSearch] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ReportsContainer
        search={search}
        refresh={refresh}
        setRefresh={setRefresh}
      ></ReportsContainer>
    </>
  );
}
export default SearchBar;
