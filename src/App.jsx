import styled from 'styled-components'
import Button from './components/Button/Button'
import Form from './components/Form/Form'
import Info from './components/Info/Info'
import Footer from './components/Footer/Footer'
import GlobalStyle from './styles/GlobalStyles'

const StyledApp = styled.div`
  width:100%;
  max-width: 1280px;
  min-height:100vh;
  margin: 0 auto;
  padding: 2rem;
  gap:1.5em;
  display:grid; 
  grid-template-columns:repeat(4,1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "info info info info"
    "buttonInfo buttonInfo buttonInfo buttonInfo"
    "form form form form"
    "footer footer footer footer";
@media screen and (min-width: 768px){
  gap:2.5em;
}
@media screen and (min-width: 1440px) {
  grid-template-rows: repeat(12 ,1fr);
  grid-template-areas:
    "info info buttonInfo buttonInfo"
    "info info buttonInfo buttonInfo"
    "info info buttonInfo buttonInfo"
    "info info form form"
    "info info form form"
    "info info form form"
    "info info form form"
    "info info form form"
    "info info form form"
    "info info form form"
    "info info form form"
    "footer footer footer footer";
    
}
`

const StyledContainer = styled.div`
grid-area: ${({ $gridArea }) => $gridArea || 'auto'};
align-self:${({ $alignSelf }) => $alignSelf || 'center'};
`

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <StyledContainer $gridArea='info'>
        <Info />
      </StyledContainer>

      <StyledContainer $gridArea='buttonInfo' $alignSelf='end'>
        <Button boldText='Try it free 7 days' normalText=' then $20/mo. thereafter' />
      </StyledContainer>

      <StyledContainer $gridArea='form' $alignSelf='start' >
        <Form />
      </StyledContainer>

      <StyledContainer $gridArea='footer' $alignSelf='end'>
        <Footer />
      </StyledContainer>
    </StyledApp>
  )
}

export default App
