import { useState, useEffect } from "react";
// import SearchBar from "./SearchBar.jsx";
import Report from "./Report.jsx";
import axios from "axios";
function ReportsContainer({ searchTerm }) {
  const [damageReportList, setDamageReportList] = useState([]);
  useEffect(() => {
    console.log(
      `Getting https://express-damage-reporting-tool.onrender.com/damage-reports/${searchTerm}`,
    );
    const fetchData = async () => {
      const response = await axios.get(
        `https://express-damage-reporting-tool.onrender.com/damage-reports/${searchTerm}`,
      );
      setDamageReportList(response.data);
    };

    fetchData(); // todo add try catch
  }, [searchTerm]);
  return (
    <section>
      {/*<p>{damageReportList}</p>*/}
      {damageReportList.map((damageReport) => {
        const { id, type, desc } = damageReport;
        return <Report key={id} id={id} type={type} desc={desc} />;
      })}
    </section>
  );
}
export default ReportsContainer;
