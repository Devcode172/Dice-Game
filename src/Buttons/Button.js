import styled from "styled-components"
 export const Button = styled.button`
        background-color: black;
        color: white;
        padding: 8px 20px;
        border-radius: 3px;
        border: 1px solid transparent;
        width: 150px;
        cursor: pointer;
        font-size: 19px;
        transition: all 0.5s;
        &:hover{
            background-color: transparent;
            border: 1px solid black;
            color: black;
            transition: all 0.5s;
        }
    `
export const OutlineButton = styled(Button)`
        /* copied from above Button component */
        /* background-color: black;
        color: white;
        padding: 8px 20px;
        border-radius: 3px;
        border: 1px solid transparent;
        width: 150px;
        cursor: pointer;
        font-size: 19px;
        &:hover{
            background-color: transparent;
            border: 1px solid black;
            color: black;
        } */
        /* New Styling: */
        border: 1px solid black;
        color: black;
        background-color: transparent;
        &:hover{
            background-color: black;
            border: 1px solid transparent;
            color: white;
        }
    `    