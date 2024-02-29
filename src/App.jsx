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
  const createReport = async (report) => {
    try {
      await api.post("/damage-reports/", report);
      setRefresh((refresh) => !refresh);
    } catch (error) {
      setMessage(error);
    }
  };
  const deleteReport = async (id) => {
    try {
      console.log("Deleting report with id", id);
      await api.delete(`/damage-reports/${id}`);
      setRefresh((refresh) => !refresh);
    } catch (error) {
      setMessage("Error deleting report");
    }
  };
  const fetchReports = async (searchTerm) => {
    const search = searchTerm ? `title/${searchTerm}` : "";
    try {
      setLoading(true);
      setMessage(null);
      const response = await api.get(`/damage-reports/${search}`);
      setDamageReportList(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setDamageReportList([]);
        setMessage("No reports found for the provided search term.");
      } else if (error.response) {
        setMessage(
          `HTTP Error ${error.response.status}: ${error.response.statusText}`,
        );
      } else {
        setMessage(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Header />
        <CreateReportContainer createReport={createReport} />
        <SearchBar fetchReports={fetchReports} refresh={refresh} />
        <ReportsContainer
          deleteReport={deleteReport}
          damageReportList={damageReportList}
          loading={loading}
          message={message}
        ></ReportsContainer>
        {/*<ReportMain />*/}
      </div>
    </>
  );
}

export default App;
