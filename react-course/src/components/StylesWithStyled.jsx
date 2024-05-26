import React, {Component} from "react";
import styled, {keyframes} from 'styled-components';
import './variables.css'

class StylesWithStyled extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 

        const backgroundText={
            color: "yellow"
        }

        const animateText=keyframes`
            from {
                color: green;
            }
            to {
                color: pink;
            }
            
        `

        // hover -> allows to change atributtes when mouse is on element
        // & -> It's like a this making reference of primary object in this case Title
        // @media -> Media queries
        const Title=styled.h1`
            color: green;
            font-size: 40px;
            text-align: center;
            background-color: ${backgroundText.color};
            &:hover{
                color: black;
            }
            @media(min-width: 800px){
                color: transparent;
            }
            animation: ${animateText} 0.5s linear infinite;
        `

        const Header=styled.header`
            height: var(--heightHeader);
            background-color: var(--headerColor);
            width: var(--widthHeader)
        `

        return ( 
            <>
                <Header>
                    <Title>
                        Styled Component
                    </Title>
                </Header>
            </>
        );
    }
}
 
export default StylesWithStyled;