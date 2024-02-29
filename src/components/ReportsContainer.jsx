import { useState, useEffect } from "react";
// import SearchBar from "./SearchBar.jsx";
import Report from "./Report.jsx";

function ReportsContainer({
  damageReportList,
  loading,
  message,
  deleteReport,
  refresh,
}) {
  useEffect(() => {
    const fetchData = async () => {};

    fetchData(); // todo add try catch
  }, [damageReportList, loading, message, refresh]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (message) {
    return <h2>{message}</h2>;
  }
  if (damageReportList.length === 0) {
    return <h2>No reports found</h2>;
  }
  return (
    <section>
      {damageReportList.map((damageReport) => {
        console.log(damageReport);
        const { _id, title, severity, desc } = damageReport;
        return (
          <Report
            deleteReport={deleteReport}
            key={_id}
            id={_id}
            title={title}
            severity={severity}
            desc={desc}
          ></Report>
        );
      })}
    </section>
  );
}
export default ReportsContainer;
