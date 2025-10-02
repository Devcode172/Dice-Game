import styled from "styled-components"
import { useState } from "react"
import {Button} from '../Buttons/Button'
import {OutlineButton}  from '../Buttons/Button'
import Rule from './Rule'
const PalyGameDice = ({dice, RandomNumberGenerator, resetscore}) => {
    // const [dice, setDice] = useState(1)
    // function RandomNumberGenerator(min,max){
    //    setDice(Math.floor(Math.random() * (max - min)) + min);
    // }
    // function dicevalue(){
    //     const value = RandomNumberGenerator(1,7);
    //     setDice(value)
    // }
    function resetScore(){
        resetscore(0);
    }
    const [showRule, setShowRule] = useState(false)
  return (
    <DiceContainer>
        <div onClick={()=>RandomNumberGenerator(1,7)} className="dice">
        <img src= {`/images/dice_${dice}.png`} alt="dice 1" />
        </div>
      <p>Click on Dice to roll</p>
      <div className="buttons">
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={()=>{setShowRule((prev)=> !prev)}}>{showRule? 'Hide':'Show'} Rule</Button>
      </div>
    { showRule && <Rule/>}
    </DiceContainer>
  )
}

export default PalyGameDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    /* border: 2px solid red; */
    gap: 5px;
    p{
        font-size: 20px;
        font-weight: bold;
    }
    .dice{
        cursor: pointer;
    }
    .buttons{
       display: flex;
       flex-direction: column;
       /* border: 2px solid red; */
       margin-top: 10px;
       gap: 20px;
    }
`