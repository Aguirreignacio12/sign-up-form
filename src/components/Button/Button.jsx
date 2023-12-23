import StyledButton from "./styles";

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