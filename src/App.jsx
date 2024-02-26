 import { useState } from 'react'
 import NavBar from "./components/NavBar.jsx";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
      </div>
    </>
  )
}

export default App
