import { useEffect, useState } from "react";
const CreationForm = ({ createReport, setIsVisible }) => {
  const [severity, setSeverity] = useState("default");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const damageReport = {
    title: title,
    severity: severity,
    desc: desc,
  };
  useEffect(() => {
    if (severity !== "default" && title && desc) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [severity, title, desc]);
  const handleCreateReport = (event) => {
    event.preventDefault();

    console.log(damageReport);
    createReport(damageReport);
    setIsVisible(false);
  };

  return (
    <div>
      <form>
        <label>Report Title:</label>
        <input
          type="text"
          name="id"
          onChange={(e) => setTitle(e.target.value)}
          required={true}
          placeholder={"Enter report title here..."}
        />
        <label>Severity</label>
        <select
          defaultValue={""}
          name="severity"
          id="severity"
          required={true}
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option value="">Select Severity </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label>Description:</label>
        <textarea
          name="desc"
          required={true}
          placeholder={"Write report description here..."}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button
          disabled={buttonDisabled}
          type="submit"
          onClick={(e) => handleCreateReport(e)}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreationForm;
