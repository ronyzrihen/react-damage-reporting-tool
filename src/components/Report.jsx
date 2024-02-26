const Report = ({ id, type, desc }) => {
  // todo remove inline styles
  const deleteReport = () => {
    console.log("delete report", id);
  };
  return (
    <div style={{ borderStyle: "solid", margin: 5 }}>
      <i onClick={deleteReport}>X</i>
      <div>
        <h3>{type}</h3>
        <h4>Description:</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Report;
