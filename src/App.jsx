import styled from 'styled-components'
import Button from './components/Button/Button'
import Form from './components/Form/Form'
import Info from './components/Info/Info'
import Footer from './components/Footer/Footer'

const StyledApp = styled.div`
  width:100%;
  max-width: 1280px;
  min-height:100vh;
  margin: 0 auto;
  padding: 2rem;
  gap:1.5em;
  text-align: center;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "info info info info"
    "buttonInfo buttonInfo buttonInfo buttonInfo"
    "form form form form"
    "footer footer footer footer";
`

const StyledContainer = styled.div`


grid-area: ${({ $gridArea }) => $gridArea || 'auto'}`
const App = () => {
  return (
    <StyledApp>
      <StyledContainer $gridArea='info'>
        <Info />
      </StyledContainer>

      <StyledContainer $gridArea='buttonInfo'>
        <Button boldText='Try it free 7 days' normalText=' then $20/mo. thereafter' />
      </StyledContainer>

      <StyledContainer $gridArea='form'>
        <Form />
      </StyledContainer>

      <StyledContainer $gridArea='footer'>
        <Footer />
      </StyledContainer>
    </StyledApp>
  )
}

export default App
