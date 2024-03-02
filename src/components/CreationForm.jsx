import { useEffect, useState } from "react";

const CreationForm = ({ setIsVisible, setCreate, data }) => {
  const [severity, setSeverity] = useState(data?.severity || "");
  const [title, setTitle] = useState(data?.title || "");
  const [desc, setDesc] = useState(data?.desc || "");
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
  const handleCreateReport = async (event) => {
    event.preventDefault();

    await setCreate(damageReport); // todo add try catch
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
          value={title}
        ></input>
        <label>Severity</label>
        <select
          defaultValue={severity}
          name="severity"
          id="severity"
          required={true}
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option value="">Select Severity </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label>Description:</label>
        <textarea
          name="desc"
          required={true}
          placeholder={"Write report description here..."}
          onChange={(e) => setDesc(e.target.value)}
        >
          {desc}
        </textarea>
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
