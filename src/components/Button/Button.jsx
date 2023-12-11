import styled, { css } from "styled-components";

const StyledButton = styled.button`
border:none;
border-radius:.60em;
cursor:pointer;
font-size: 1em;
height:auto;
padding:1.5em;
width:100%;

${(props) =>
    props.home && css`
      background-color:hsl(248, 32%, 49%);
      box-shadow: 0px 8px 0px rgba(0, 0, 0, 30%);
    `
  }

${(props) =>
    props.form && css`
      background-color: hsl(154, 59%, 51%);
      box-shadow: 0px 5px 0px rgb(47, 168, 115);
      letter-spacing:.02em;
      text-transform:uppercase;
    `
  }
`;



const Button = ({ home, form, boldText, normalText }) => {
  return <>
    <StyledButton home={home} form={form}>
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