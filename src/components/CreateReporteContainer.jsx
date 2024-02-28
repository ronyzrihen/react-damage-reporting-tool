import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import CreationForm from "./CreationForm.jsx";
const CreateReporteContainer = ({ toggleCreate, setToggleCreate }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(!toggleCreate);
  }, [toggleCreate]);

  const createButton = (e) => {
    e.preventDefault();
    setIsVisible((isVisible) => !isVisible);
    setToggleCreate(!toggleCreate);
  };
  const cancel = (e) => {
    e.preventDefault();
    setIsVisible((isVisible) => !isVisible);
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
export default CreateReporteContainer;
