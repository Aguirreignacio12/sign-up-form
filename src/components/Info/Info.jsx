import styled from "styled-components";

const StyledInfo = styled.section`
width:100%;
margin:3.8em 0 2.7em 0;
`

const StyledTitle = styled.h1`
font-size:1.75rem;
padding: 0 0 .45em 0;

@media screen and (min-width:768px){
font-size:2.75rem;
}
`

const StyledParagraph = styled.p`
@media screen and (min-width:768px){
font-size:1.2rem;
}

`

const Info = () => {

  return <>
    <StyledInfo>
      <StyledTitle>Learn to code by watching others </StyledTitle>
      <StyledParagraph>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
        but understanding how developers think is invaluable.
      </StyledParagraph>
    </StyledInfo>
  </>

}

export default Info;