import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledInfo = styled.section`
width:100%;
margin:3.8em 0 2.7em 0;
`

export const StyledTitle = styled.h1`
font-size:${theme.fontSize.medium};
padding: 0 0 .45em 0;

@media screen and (min-width:768px){
font-size:${theme.fontSize.large};
}
`

export const StyledParagraph = styled.p`
@media screen and (min-width:768px){
  font-size:${theme.fontSize.regular};
}

`