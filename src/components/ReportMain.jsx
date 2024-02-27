import { useState, useEffect } from "react";
import ReportsContainer from "./ReportsContainer.jsx";
import SearchBar from "./SearchBar.jsx";
import CreateReporteContainer from "./CreateReporteContainer.jsx";

const ReportMain = () => {
  const [Container, setContainer] = useState("");
  const [toggleCreate, setToggleCreate] = useState(true);
  // useEffect(() => {}, [ToggleCreate]);
  return (
    <div>
      <CreateReporteContainer
        toggleCreate={toggleCreate}
        setToggleCreate={setToggleCreate}
      />
      <SearchBar setContainer={setContainer} />
      <ReportsContainer searchTerm={Container} toggleCreate={toggleCreate} />
    </div>
  );
};

export default ReportMain;
