import { useState } from "react";
import Header from "./components/Header.jsx";
import ReportMain from "./components/ReportMain.jsx";
import Button from "./components/Button.jsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <ReportMain />
      </div>
    </>
  );
}

export default App;
