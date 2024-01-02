import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/theme";
import { animation } from "react-reveal/globals";

export const StyledContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:.5em;
`
const animationForm = keyframes`
0%{opacity:0; margin-top:-.5em}
25%{opacity:.25; margin-top:-.4em}
50%{opacity:.50; margin-top:-.3em}
55%{opacity:.75; margin-top:-.2em}
100%{  opacity:100; margin:0;}`

export const StyledInput = styled.input`
width:100%;
font-size:${theme.fontSize.default};
outline:none;
font-weight:600;
padding:1em 1.2em;
background-color: #fff;
border-radius:${theme.borderRadius.regular};
border: 2px solid  ${theme.colors.shadow};
color: ${theme.colors.link};


&:focus{
border: 2px solid ${theme.colors.grayishBlue};
}
`

export const StyledErrorMessage = styled.span`
align-self:end;
color:${theme.colors.error};
font-size:${theme.fontSize.small};
animation:${animationForm} .5s ease;
`