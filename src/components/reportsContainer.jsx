const { useState, useEffect } = require("react");
const SearchBar = require("./searchBar");
function ReportsContainer(){
    const [damageReportList, setDamageReportList] = useState([])
    useEffect(() => { // runs everytime a component is rendered
        const fechData = async () => {
            const response = await fetch(`https://express-damage-reporting-tool.onrender.com/damage-reports/${damageReportList.id}`);
            const data = await response.json();
            setDamageReportList(data);
        }
        fechData();
    }, [SearchBar]); // empty array means only for a specific component
    return(
        <>

        </>
    );
}
module.exports = ReportsContainer;