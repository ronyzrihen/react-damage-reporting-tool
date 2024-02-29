import { useState } from "react";
import CreationForm from "./CreationForm.jsx";
const CreateReportContainer = ({ createReport }) => {
  const [isVisible, setIsVisible] = useState(false);

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
            createReport={createReport}
            setIsVisible={setIsVisible}
          ></CreationForm>
        </div>
      ) : null}
    </>
  );
};
export default CreateReportContainer;
