import { StyledFooter, StyledLink, StyledParagraph } from "./styles";

const Footer = () => {

  return (
    <StyledFooter>
      <StyledParagraph>
        Challenge by{" "}
        <StyledLink
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </StyledLink>
        . Coded by{" "}
        <StyledLink href="#">Ignacio Aguirre</StyledLink>.
      </StyledParagraph>
    </StyledFooter>
  );
}
export default Footer;