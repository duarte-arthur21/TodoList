import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {onClick, type, title, variant} = props
    return(
        <MyButton 
            onClick={onClick} 
            type={type}>
            {title}
        </MyButton>

    );
}

const Info = (props) => {
    const {onClick, type, title, variant} = props
    return(
        <ButtonInfo 
            onClick={onClick} 
            type={type}>
            {title}
        </ButtonInfo>

    );
}

export {Button, Info};

const MyButton = styled.button`
    display: flex;
    position: relative;
    color: #fff;
    background: rgba(85, 132, 122, 0.97);
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 45px;
    width: 40ren;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const ButtonInfo = styled.button`
    position: relative;
    color: rgba(85, 132, 122, 0.97);
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 45px;
    justify-content: center;
    align-items: center;
    text-align: center;
`