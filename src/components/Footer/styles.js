import styled from "styled-components";
import { theme } from "../../styles/theme";


export const StyledFooter = styled.footer`
  width:100%;
  font-size: ${theme.fontSize.small};
`

export const StyledLink = styled.a`
color:${theme.colors.link};
text-decoration:none;
`

export const StyledParagraph = styled.p`
color:${theme.colors.text};
text-align:center;
`