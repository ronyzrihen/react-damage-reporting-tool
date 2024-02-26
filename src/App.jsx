import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
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
        <NavBar />
        <ReportMain />
      </div>
    </>
  );
}

export default App;
