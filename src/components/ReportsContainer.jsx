import { useState, useEffect } from "react";
// import SearchBar from "./SearchBar.jsx";
import Report from "./Report.jsx";
import axios from "axios";
const api = axios.create({
  baseURL: "https://express-damage-reporting-tool.onrender.com",
});
function ReportsContainer({ searchTerm }) {
  const [damageReportList, setDamageReportList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get(`/damage-reports/${searchTerm}`);
        setDamageReportList(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Handle 404 error (Not Found)
          setDamageReportList([]);
          setError("No reports found for the provided search term.");
        } else if (error.response) {
          // Handle other HTTP errors
          setError(
            `HTTP Error ${error.response.status}: ${error.response.statusText}`,
          );
        } else {
          // Handle other errors (e.g., network error)
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // todo add try catch
  }, [searchTerm]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <section>
      {damageReportList.map((damageReport) => {
        const { id, type, desc } = damageReport;
        return <Report key={id} id={id} type={type} desc={desc} />;
      })}
    </section>
  );
}
export default ReportsContainer;
