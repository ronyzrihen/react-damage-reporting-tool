const Report = ({ id, title, severity, desc, deleteReport }) => {
  // todo remove inline styles
  return (
    <div style={{ borderStyle: "solid", margin: 5 }}>
      <button onClick={() => deleteReport(id)}>Delete</button>
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
