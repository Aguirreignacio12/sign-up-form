import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledForm = styled.form`
  background-color : #fff;
  border-radius:${theme.borderRadius.regular};
  display:flex;
  flex-direction:column;
  padding: 1em 1.2em;
  position:relative;
  gap:1em;
  box-shadow: ${theme.shadows.medium} ${theme.colors.shadow};

@media ${theme.mediaQueries.tablet}{
  padding:3em 2.5em;
  gap:1.5em;
}
`

export const StyledParagraph = styled.p`
color:${theme.colors.grayishBlue};
font-size:${theme.fontSize.small};
text-align:center;
line-height:1.9em;
padding:0 1.05em;
`

export const StyledStrong = styled.strong`
color: ${theme.colors.error};
`