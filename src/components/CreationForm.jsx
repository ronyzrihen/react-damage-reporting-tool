import { useEffect, useState } from "react";
import {
  CreationFormStyled,
  FormInputContainer,
  FormWrapper,
} from "./styles/Form.styled.js";
import {
  _Input,
  _TextArea,
  InputsStyled,
  _Select,
} from "./styles/Inputs.styled.js";

const CreationForm = ({ setAction, purpose, data }) => {
  const [severity, setSeverity] = useState(data?.severity || "default");
  const [title, setTitle] = useState(data?.title || "");
  const [desc, setDesc] = useState(data?.desc || "");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const damageReport = {
    title: title,
    severity: severity,
    desc: desc,
  };
  useEffect(() => {
    if (severity !== "default" && title && title.length < 13 && desc) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [severity, title, desc]);
  const handleCreateReport = async (event) => {
    event.preventDefault();

    await setAction(damageReport);
  };

  return (
    <FormWrapper>
      <h2>{`${purpose} Report`} </h2>
      <CreationFormStyled>
        <FormInputContainer>
          <_Input
            type="text"
            name="id"
            onChange={(e) => setTitle(e.target.value)}
            required={true}
            placeholder={"Report Title"}
            value={title}
          ></_Input>
        </FormInputContainer>
        <FormInputContainer>
          <label>Severity</label>
          <_Select
            defaultValue={severity}
            name="severity"
            id="severity"
            required={true}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option value="default">Select Severity </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </_Select>
        </FormInputContainer>
        <FormInputContainer>
          <_TextArea
            name="desc"
            required={true}
            placeholder={"Description"}
            onChange={(e) => setDesc(e.target.value)}
          >
            {desc}
          </_TextArea>
        </FormInputContainer>
        <InputsStyled
          disabled={buttonDisabled}
          type="submit"
          onClick={(e) => handleCreateReport(e)}
        >
          {purpose}
        </InputsStyled>
      </CreationFormStyled>
    </FormWrapper>
  );
};

export default CreationForm;
