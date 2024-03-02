import { deleteReport, updateReport } from "../service/apiRequests";
import CreationForm from "./CreationForm.jsx";
import { useState } from "react";
import {
  CardStyled,
  TrashStyled,
  EditStyled,
  CardButtons,
  CardContent,
  SeverityBadge,
  DescriptionBox,
} from "./styles/Card.styled.js";
import { InputsStyled } from "./styles/Inputs.styled.js";

const Report = ({ damageReport, setRefresh, setMessage }) => {
  const [editMode, setEditMode] = useState(false);
  const { _id, title, severity, desc } = damageReport;

  const handleDelete = async () => {
    try {
      await deleteReport(_id);
      setRefresh((refresh) => !refresh);
    } catch (error) {
      setMessage(error);
    }
  };
  const handleEdit = async (report) => {
    try {
      await updateReport(_id, report);
      setEditMode(false);
      setRefresh((refresh) => !refresh);
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <CardStyled>
      <CardButtons>
        <TrashStyled onClick={handleDelete} />
        {editMode ? (
          <InputsStyled color={"#DC4C64"} onClick={() => setEditMode(false)}>
            Cancel
          </InputsStyled>
        ) : (
          <EditStyled onClick={() => setEditMode(true)} />
        )}
      </CardButtons>

      {editMode ? (
        <div>
          <CreationForm
            purpose={"Edit"}
            setAction={handleEdit}
            data={damageReport}
          ></CreationForm>
        </div>
      ) : (
        <div>
          <CardContent>
            <h1>{title}</h1>
            <SeverityBadge
              color={
                severity === "Low"
                  ? "#54B4D3"
                  : severity === "Medium"
                    ? "#E4A11B"
                    : "#DC4C64"
              }
            >
              <span>{severity}</span>
            </SeverityBadge>
            <h4>Description:</h4>
            <DescriptionBox>
              <p>{desc}</p>
            </DescriptionBox>
          </CardContent>
        </div>
      )}
    </CardStyled>
  );
};
export default Report;
