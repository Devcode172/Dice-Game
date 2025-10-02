import styled from "styled-components"
import { useState } from "react"
const PlayGameNavbar = ( {selectedNumber, setSelectedNumber, score, caution, setCaution}) => {
    const diceNumbers = [1, 2, 3, 4, 5, 6]
    // const [selectedNumber, setSelectedNumber] = useState()
    function errorHandler(number){
        setSelectedNumber(number)
        setCaution('')
    }
    return (
        <Container>
            <div className="left-view">
                <h1>{score}</h1>
                <p>Total Score</p>
            </div>
            <div className="right-view">
                {/* {array.forEach((value)=>{
            <Box>{value}</Box>
        })} */}
                {/* You used forEach inside JSX, but forEach does not return anything (it always returns undefined). That’s why nothing shows up. In React, when you want to render a list of elements, you should use .map() instead of forEach. */}
                <p className="error">{caution}</p>
                <div className="boxes">
                    {diceNumbers.map((number, index) => (
                        <Box key={index} isselected={number == selectedNumber} onClick={() => errorHandler(number)} >{number}</Box>
                    ))}
                </div>
                {/* <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box> */}
                <p>Select Number</p>
            </div>
        </Container>
    )
}

export default PlayGameNavbar

const Container = styled.div`
display: flex;
margin-top: 20px;
/* border: 2px solid red; */
justify-content: space-around;
    .left-view{
        text-align: center;
        /* background-color: red; */
        h1{
            font-size: 70px;
        }
        p{
            font-size: 20px;

        }
    }
    .right-view{
        /* border: 2px solid black; */
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 10px;
        .error{
            color: red;
        }
        .boxes{
            display: flex;
            gap: 20px;
            font-size: 20px;
            font-weight: 500;
        }
        p{
            font-size: 20px;
        }
    }
`
const Box = styled.div`
    border: 1px solid black;
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${(props) => props.isselected ? 'black' : 'white'};
    color: ${(props) => !props.isselected ? 'black' : 'white'};
    /* margin-right: 10px; */
`