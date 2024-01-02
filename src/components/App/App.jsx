import styled from 'styled-components'
import Button from '../Button/Button'
import Form from '../Form/Form'
import Info from '../Info/Info'
import Footer from '../Footer/Footer'
import GlobalStyle from '../../styles/GlobalStyles'
import { theme } from '../../styles/theme'

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
@media ${theme.mediaQueries.tablet}{
  gap:2.5em;
}
@media ${theme.mediaQueries.desktop} {
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
