import { deleteReport, updateReport } from "../service/apiRequests";

import { useState } from "react";
const Report = ({ damageReport, setRefresh }) => {
  const [editMode, setEditMode] = useState(false);
  // todo remove inline styles
  const { _id, title, severity, desc } = damageReport;

  const handleDelete = async () => {
    try {
      await deleteReport(_id);
      setRefresh((refresh) => !refresh);
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = () => {
    updateReport(_id, { title, severity, desc });
  };
  if (editMode) {
    return (
      <div style={{ borderStyle: "solid", margin: 5 }}>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={setEditMode((editMode) => !editMode)}>Cancel</button>
        <div>
          <h3>{title}</h3>
          <h3>{severity}</h3>
          <h4>Description:</h4>
          <p>{desc}</p>
          <button onClick={handleEdit}>Cancel</button>
        </div>
      </div>
    );
  }
  return (
    <div style={{ borderStyle: "solid", margin: 5 }}>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={setEditMode((editMode) => !editMode)}>Delete</button>
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
