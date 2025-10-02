import styled from "styled-components"
import {Button} from '../Buttons/Button'
const StartGame = (props) => {
    return (
        <Container>
            <img src="/images/Dice Image.png" alt="" />
            <div className="content">
                <H1>Dice Game</H1>
                <Button onClick={props.toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame

const Container = styled.div`
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0ebeb;
    img{
        width: 500px;
    }
    .content{
        /* border: 2px solid red; */
        margin-top: -100px;
    }
    `
// const Button = styled.button`
//         background-color: black;
//         color: white;
//         padding: 8px 20px;
//         border-radius: 3px;
//         border: 1px solid transparent;
//         width: 150px;
//         cursor: pointer;
//         font-size: 19px;
//         &:hover{
//             background-color: transparent;
//             border: 1px solid black;
//             color: black;
//         }
//     `
const H1 = styled.h1`
        font-size: 80px;
        font-weight: 700;
    `