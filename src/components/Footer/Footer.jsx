import styled from "styled-components";


const StyledFooter = styled.footer`
  width:100%;
  font-size:.9rem;
`

const StyledLink = styled.a`
color:hsl(249, 10%, 26%);
text-decoration:none;
`

const StyledParagraph = styled.p`
color:hsl(250,50%,100%);
text-align:center;
`



const Footer = () => {

  return <>
    <StyledFooter>
      <StyledParagraph className="attribution">
        Challenge by <StyledLink href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</StyledLink>.
        Coded by <StyledLink href="#">Ignacio Aguirre</StyledLink>.
      </StyledParagraph>
    </StyledFooter>
  </>
}
export default Footer;