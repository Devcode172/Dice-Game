import { useState } from 'react'
import './App.css'
import StartGame from './Componenets/StartGame'
import PlayGame from './Componenets/PlayGame'

function App() {
const [PlayNowClicked, setPlayNowClicked] = useState(false)
function changeState() {
  setPlayNowClicked((prev) => !prev)
}
  return (
    <>
    {PlayNowClicked ? <PlayGame/> : <StartGame toggle  = {changeState}/>}
    
    </>
  )
}

export default App
