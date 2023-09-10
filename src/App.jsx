import Startgame from "./components/startgame"
import './App.css'
import Gameplay from "./components/Gameplay"
import { useState } from "react"
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const toggle = () => {
    setIsGameStarted(!isGameStarted);
  }
  return (
    <>
      {isGameStarted ? <Gameplay /> : <Startgame onClick={toggle} />}
    </>
  )
}
export default App
