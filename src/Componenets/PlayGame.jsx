import PalyGameDice from "./PalyGameDice"
import PlayGameNavbar from "./PlayGameNavbar"
import styled from "styled-components"
import { useState } from "react"
const PlayGame = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [dice, setDice] = useState(1)
  const [error, setError] = useState('')
  function RandomNumberGenerator(min, max) {
    if(!selectedNumber)
    {
      setError('Please Select Number')
      return
    }
    const value = Math.floor(Math.random() * (max - min)) + min;
    setDice(value);
    if(selectedNumber == value){
      setScore((prev) => prev + value)
    }
    else{
      setScore((prev) => prev - 2)
    }
    setSelectedNumber(undefined)
  }
  return (
    <Container>
      <PlayGameNavbar selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} score = {score} caution = {error} setCaution = {setError} />
      <PalyGameDice dice={dice} RandomNumberGenerator={()=> RandomNumberGenerator(1,7)} resetscore = {setScore} />
    </Container>
  )
}

export default PlayGame

const Container = styled.div`
    width: 1300px;
    margin: 0 auto;
    /* height: 100vh; */
    background-color: #f0ebeb;
    height: calc(100vh - 20px);
`