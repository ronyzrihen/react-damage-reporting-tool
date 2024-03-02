import { useState } from "react";
// import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import CreateReportContainer from "./components/CreateReportContainer.jsx";
import {
  Background,
  BodyBackground,
  HeaderBackground,
} from "./components/styles/Background.styled.js";

function App() {
  const [refresh, setRefresh] = useState(false);
  // todo add are you sure you want to delete this report

  return (
    <>
      <Background>
        <HeaderBackground>
          <h1>Damage Reporting Tool</h1>
        </HeaderBackground>
        <BodyBackground>
          <CreateReportContainer setRefresh={setRefresh} />
          <SearchBar refresh={refresh} setRefresh={setRefresh} />
        </BodyBackground>
      </Background>
    </>
  );
}

export default App;
