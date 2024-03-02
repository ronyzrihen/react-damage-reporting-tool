import styled from "styled-components";
import { Trash3Fill } from "@styled-icons/bootstrap";
import { Edit2 } from "@styled-icons/evaicons-solid/Edit2";
const CardStyled = styled.div`
  width: 15rem;
  min-height: 20rem;
  height: fit-content;
  border-radius: 1rem;
  box-shadow: 0 10px 8px #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  background-color: white;
  &:hover {
    box-shadow: 0 10px 8px #666;
  }
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  width: 100%;
  padding: 1rem 1rem 0 0;
  gap: 1rem;
`;

const TrashStyled = styled(Trash3Fill)`
  color: #dc4c64;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
const EditStyled = styled(Edit2)`
  color: #54b4d3;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
const CardContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeverityBadge = styled.span`
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 2rem;
  min-width: 5rem;
  padding: 0.5rem;
`;
const DescriptionBox = styled.div`
  padding: 1rem;
  width: 12rem;
  height: 3.5rem;
  background-color: #eff2f6;
  border-radius: 0 0 1rem 1rem;
  overflow: auto;
`;

export {
  EditStyled,
  TrashStyled,
  CardButtons,
  SeverityBadge,
  CardStyled,
  CardContent,
  DescriptionBox,
};
