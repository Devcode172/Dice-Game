import React from 'react'
import styled from 'styled-components'
const Rule = () => {
  return (
    <RuleContainer>
      <h2>How to play dice game</h2>
      <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>After click on  dice  if selected number is equal to dice number you will get same point as dice </li>
        <li>If you get wrong guess then  2 point will be dedcuted</li>
      </ul>
      {/* <p> Select any number</p>
      <p> Click on dice image</p>
      <p> After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p> If you get wrong guess then  2 point will be dedcuted </p> */}
    </RuleContainer>
  )
}

export default Rule

const RuleContainer = styled.div`
border: 2px solid red;
padding: 10px 10px;
width: 400px;
/* background-color: purple; */
border: 1px solid black;
box-shadow: 1px 1px 10px  black;
border-radius: 10px;
position: absolute;
left: 5%;
/* top: 30%; */
display: flex;
flex-direction: column;
gap: 10px;
background-color: white;
ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
li{
    font-size: 20px;
    list-style-position: inside;
    list-style-type: square;
}
`