import { useEffect, useState } from "react";
import CreationForm from "./CreationForm.jsx";
import { createReport } from "../service/apiRequests.js";
const CreateReportContainer = ({ setRefresh }) => {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [create, setCreate] = useState({});
  useEffect(() => {
    if (!isVisible) {
      console.log("refreshing");
      setRefresh((refresh) => !refresh);
    }
  }, [isVisible]);
  useEffect(() => {
    if (create) {
      try {
        createReport(create);
      } catch (error) {
        setMessage(error);
      }
    }
  }, [create]);
  if (message) {
    return <h2>{message}</h2>; // todo make into a component
  }
  const createButton = (e) => {
    e.preventDefault();
    setIsVisible(true);
  };
  const cancel = (e) => {
    e.preventDefault();
    setIsVisible(false);
  };

  const buttonValues = {};
  if (!isVisible) {
    buttonValues.onClick = createButton;
    buttonValues.btnVal = "Create Report";
  } else {
    buttonValues.onClick = cancel;
    buttonValues.btnVal = "Cancel";
  }

  return (
    <>
      <div>
        <button onClick={buttonValues.onClick}>{buttonValues.btnVal}</button>
      </div>
      {isVisible ? (
        <div>
          <CreationForm
            setIsVisible={setIsVisible}
            setCreate={setCreate}
          ></CreationForm>
        </div>
      ) : null}
    </>
  );
};
export default CreateReportContainer;
