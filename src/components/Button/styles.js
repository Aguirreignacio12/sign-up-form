import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";



const StyledButton = styled.button`
  border:none;
  border-radius:.60em;
  cursor:pointer;
  font-size:1rem;
  height:auto;
  padding:1.5em 2em;
  line-height:1.5em;
  width:100%;
  background-color:${theme.colors.buttonSecondary};
  box-shadow: ${theme.shadows.medium} ${theme.colors.shadow};
  letter-spacing: .02em; 

  ${props =>
    props.$form &&
    css`
      background-color: ${theme.colors.buttonPrimary};
      box-shadow: ${theme.shadows.regular} ${theme.colors.shadowButtonPrimary};
      letter-spacing: 0.02em; 
      text-transform: uppercase;
    `};
`;

export default StyledButton;