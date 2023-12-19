import styled from "styled-components";

const StyledButton = styled.button`
  border:none;
  border-radius:.60em;
  cursor:pointer;
  font-size: 1rem;
  height:auto;
 padding:1.5em 2em;
  line-height:1.5em;
  width:100%;
  background-color: ${props => props.$form ? 'hsl(154, 59%, 51%)' : 'hsl(248, 32%, 49%)'};
  box-shadow: ${props => props.$form ? '0px 5px 0px rgb(47, 168, 115)' : '0px 8px 0px rgba(0, 0, 0, 15%)'};
  letter-spacing: .02em; 
  text-transform: ${props => props.$form && 'uppercase'}
  `;

const Button = ({ $form, boldText, normalText }) => {
  return <>
    <StyledButton $form={$form}>
      {boldText ? (
        <>
          <strong>{boldText}</strong>{normalText}
        </>
      ) : (<>
        {normalText}
      </>)
      }
    </StyledButton>
  </>
}
export default Button;