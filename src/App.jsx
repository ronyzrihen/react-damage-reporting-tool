import { useState } from "react";
import Header from "./components/Header.jsx";
import ReportMain from "./components/ReportMain.jsx";
import ReportsContainer from "./components/ReportsContainer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import CreateReportContainer from "./components/CreateReportContainer.jsx";
import axios from "axios";
const api = axios.create({
  baseURL: "https://express-damage-reporting-tool.onrender.com",
});
import "./App.css";

function App() {
  const [damageReportList, setDamageReportList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [refresh, setRefresh] = useState(false);
  // todo move all api functions to a different module
  // todo delete Button component when ready
  // todo add are you sure you want to delete this report
  // todo delete errors folder if you didnt use it

  return (
    <>
      <div>
        <Header />
        <CreateReportContainer setRefresh={setRefresh} />
        <SearchBar refresh={refresh} setRefresh={setRefresh} />
      </div>
    </>
  );
}

export default App;
