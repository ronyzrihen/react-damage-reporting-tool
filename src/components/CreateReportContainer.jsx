import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import CreationForm from "./CreationForm.jsx";
const CreateReportContainer = () => {
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

  if (isVisible) {
    return (
      <>
        <div>
          <Button onClick={buttonValues.onClick} btnVal={buttonValues.btnVal} />
        </div>
        <div>
          <CreationForm />
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <Button onClick={buttonValues.onClick} btnVal={buttonValues.btnVal} />
      </div>
    </>
  );
};
export default CreateReportContainer;
