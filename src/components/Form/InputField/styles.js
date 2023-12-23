import styled from "styled-components";
import { theme } from "../../../styles/theme";

const StyledInput = styled.input`
width:100%;
font-size:1rem;
outline:none;
font-weight:600;
padding:1em 1.2em;
position:relative;
background-color: #fff;
border-radius:${theme.borderRadius.regular};
border: 2px solid  ${theme.colors.shadow};
color: ${theme.colors.link};


&:focus{
border: 2px solid ${theme.colors.grayishBlue};
}
`
export default StyledInput;