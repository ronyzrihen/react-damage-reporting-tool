import { useEffect, useState } from "react";
import CreationForm from "./CreationForm.jsx";
import { createReport } from "../service/apiRequests.js";
import { CardStyled } from "./styles/Card.styled.js";
import { ButtonsStyled } from "./styles/Buttons.styled.js";
const CreateReportContainer = ({ setRefresh }) => {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [create, setCreate] = useState(null);
  useEffect(() => {
    if (!isVisible) {
      console.log("refreshing");
      setRefresh((refresh) => !refresh);
    }
  }, [isVisible]);
  useEffect(() => {
    console.log("create", create);
    const newReport = async () => {
      if (create) {
        try {
          await createReport(create);
          setIsVisible(false);
        } catch (error) {
          setMessage(error.message);
        }
      }
    };
    newReport();
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

  return (
    <>
      <div>
        {isVisible ? (
          <ButtonsStyled color={"#DC4C64"} onClick={cancel}>
            Cancel
          </ButtonsStyled>
        ) : (
          <ButtonsStyled onClick={createButton}>Create</ButtonsStyled>
        )}
      </div>
      {isVisible ? (
        <CardStyled>
          <CreationForm purpose={"Create"} setAction={setCreate}></CreationForm>
        </CardStyled>
      ) : null}
    </>
  );
};
export default CreateReportContainer;
