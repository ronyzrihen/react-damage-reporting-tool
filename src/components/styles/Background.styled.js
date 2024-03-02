import styled from "styled-components";

const Background = styled.div`
  background-color: #eff2f6;
  height: 100vh;
  width: 100vw;
`;

const HeaderBackground = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px 0 rgba(207, 207, 207, 1);
  margin-bottom: 1rem;
  border-radius: 0 0 5rem 5rem;
`;
const BodyBackground = styled.div`
  background-color: #eff2f6;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { Background, HeaderBackground, BodyBackground };
