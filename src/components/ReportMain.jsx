import { useState, useEffect } from "react";
import ReportsContainer from "./ReportsContainer.jsx";
import SearchBar from "./SearchBar.jsx";

const ReportMain = () => {
  const [Container, setContainer] = useState("");
  return (
    <div>
      <SearchBar setContainer={setContainer} />
      <ReportsContainer searchTerm={Container} />
    </div>
  );
};

export default ReportMain;
