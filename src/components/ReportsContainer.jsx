import { useState, useEffect } from "react";
import SearchBar from"./SearchBar.jsx";
import Report from "./Report.jsx";
import axios from "axios";
function ReportsContainer(){
    const [damageReportList, setDamageReportList] = useState([])

    useEffect(() => { // runs everytime a component is rendered
        const fechData = async () => {
            const response = await axios.get(`https://express-damage-reporting-tool.onrender.com/damage-reports/${SearchBar}`);
            setDamageReportList(response.data);
        }

        fechData(); // todo add try catch
    }, [SearchBar]);
    return(
        <>
            {damageReportList.map((damageReport) => (
                    <Report props={damageReport}/>
                )
            )}
        </>
    );
}
export default ReportsContainer;