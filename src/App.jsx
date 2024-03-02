import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import CreateReportContainer from "./components/CreateReportContainer.jsx";
import {
  MainStyled,
  HeaderBackground,
} from "./components/styles/Background.styled.js";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <HeaderBackground>
        <h1>Damage Reporting Tool</h1>
      </HeaderBackground>
      <MainStyled>
        <CreateReportContainer setRefresh={setRefresh} />
        <SearchBar refresh={refresh} setRefresh={setRefresh} />
      </MainStyled>
    </>
  );
}

export default App;
