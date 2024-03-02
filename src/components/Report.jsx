import { deleteReport, updateReport } from "../service/apiRequests";
import CreationForm from "./CreationForm.jsx";
import { useState } from "react";
const Report = ({ damageReport, setRefresh, setMessage }) => {
  const [editMode, setEditMode] = useState(false);
  // todo remove inline styles
  const { _id, title, severity, desc } = damageReport;

  const handleDelete = async () => {
    try {
      await deleteReport(_id);
      setRefresh((refresh) => !refresh);
    } catch (error) {
      setMessage(error);
    }
  };
  const handleEdit = async (report) => {
    try {
      await updateReport(_id, report);
      setRefresh((refresh) => !refresh);
    } catch (error) {
      setMessage(error);
    }
  };
  if (editMode) {
    return (
      <div style={{ borderStyle: "solid", margin: 5 }}>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => setEditMode(false)}>Cancel</button>
        <div>
          <CreationForm
            setIsVisible={setEditMode}
            setCreate={handleEdit}
            data={damageReport}
          ></CreationForm>
        </div>
      </div>
    );
  }
  return (
    <div style={{ borderStyle: "solid", margin: 5 }}>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setEditMode(true)}>Edit</button>
      <div>
        <h3>{title}</h3>
        <h3>{severity}</h3>
        <h4>Description:</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Report;
