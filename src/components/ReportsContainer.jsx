import { useState, useEffect } from "react";
import { fetchReports } from "../service/apiRequests";
import Report from "./Report.jsx";

function ReportsContainer({ search, refresh, setRefresh }) {
  const [damageReportList, setDamageReportList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const getReports = async () => {
      try {
        setLoading(true);
        setMessage(null);
        const data = await fetchReports(search);
        setDamageReportList(data);
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

    getReports();
  }, [search, refresh]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (message) {
    return <h2>{message}</h2>; // todo make into a component
  }
  if (damageReportList.length === 0) {
    return <h2>No reports found</h2>;
  }
  return (
    <section>
      {damageReportList.map((damageReport) => {
        const { _id } = damageReport;
        return (
          <Report
            key={_id}
            damageReport={damageReport}
            setRefresh={setRefresh}
          ></Report>
        );
      })}
    </section>
  );
}
export default ReportsContainer;
