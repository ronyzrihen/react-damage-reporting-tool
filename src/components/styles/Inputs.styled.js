import styled from "styled-components";

const InputsStyled = styled.button`
  background-color: ${(props) => props.color || "green"};
  border: none;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 1.5rem;
  &:disabled {
    background-color: #9fa6b2;
  }
`;

const _Input = styled.input`
  background-image: linear-gradient(#20aee3, #20aee3),
    linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position:
    center bottom,
    center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size:
    0 2px,
    100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: #bfbfbf;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
    background-size:
      100% 2px,
      100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
  }
`;
const _TextArea = styled.textarea`
  background-image: linear-gradient(#20aee3, #20aee3),
    linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position:
    center bottom,
    center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size:
    0 2px,
    100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: #bfbfbf;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
    background-size:
      100% 2px,
      100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
  }
`;

const _Select = styled.select`
    background-image: linear-gradient(#20aee3, #20aee3),
    linear-gradient(#bfbfbf, #bfbfbf);
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
    float: none;
    background-color: transparent;
    background-position:
    center bottom,
    center calc(100% - 1px);
    background-repeat: no-repeat;
    background-size:
    0 2px,
    100% 1px;
    padding: 0;
    transition: background 0s ease-out 0s;
    color: #bfbfbf;
    min-height: 35px;
    display: initial;
    width: 100%;
    outline: none;
    font-size: 15px;
    &:focus {
        background-size:
                100% 2px,
                100% 1px;
        outline: 0 none;
        transition-duration: 0.3s;
        color: #525252;
    
    `;

export { InputsStyled, _Input, _TextArea, _Select };
