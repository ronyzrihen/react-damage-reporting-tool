import { useEffect, useState } from "react";
import CreationForm from "./CreationForm.jsx";
import { createReport } from "../service/apiRequests.js";
import { CardStyled } from "./styles/Card.styled.js";
import { InputsStyled } from "./styles/Inputs.styled.js";
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
          setCreate(null);
          setIsVisible(false);
        } catch (error) {
          setMessage(error.message);
        }
      }
    };
    newReport();
  }, [create]);

  if (message) {
    return <h2>{message}</h2>;
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
          <InputsStyled color={"#DC4C64"} onClick={cancel}>
            Cancel
          </InputsStyled>
        ) : (
          <InputsStyled onClick={createButton}>Create</InputsStyled>
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
