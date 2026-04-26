import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";
import { FlexWrapper } from "../FlexWrapper";
import { Button } from "../button";
import { Icon } from "../icon/Icon";
import { font } from "../../styles/Common";

export function Form() {
  return (
    <StyledForm>
      <FlexWrapper direction="column" gap="20px" align="center">
        <FormTitle>Feedback form</FormTitle>
        <FormDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi modi
          dignissimos dolorum architecto fugit eaque.
        </FormDescription>
        <FieldsWrapper>
          <FieldWrapper>
            <IconWrapper>
              <Icon iconId="account" width="auto" height="auto" viewBox="-9 -10 40 40" />
            </IconWrapper>
            <Field aria-label="your name field" placeholder="Your Name" />
          </FieldWrapper>
          <FieldWrapper>
            <IconWrapper>
              <Icon iconId="mail" width="auto" height="auto" viewBox="-7 -10 40 40" />
            </IconWrapper>
            <Field aria-label="your mail field" placeholder="Mail Id" />
          </FieldWrapper>
          <FieldWrapper>
            <IconWrapper>
              <Icon iconId="mobile" width="auto" height="auto" viewBox="-11 -8 40 40" />
            </IconWrapper>
            <Field aria-label="your mobile number field" placeholder="Mobile Number" />
          </FieldWrapper>
          <TextArea aria-label="your feedback field" placeholder="Your Feedback" />
        </FieldsWrapper>
        <Button>SUBMIT</Button>
      </FlexWrapper>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  padding: 50px;
  box-shadow: ${theme.styles.shadow};
  margin-bottom: 80px;
  border-radius: 20px;
  ${Button} {
    margin-top: 20px;
    width: 220px;
  }
  @media ${theme.media.tablet}{
    padding: 30px;
    margin-bottom: 50px;
  }
`;
const FormTitle = styled.h5`
  ${font({color:theme.colors.primery, weight:600, Fmax:40, Fmin:32})}
  text-transform: uppercase;
`;
const FormDescription = styled.p`
  font-size: 18px;
  color: ${theme.colors.lightGrey};
  line-height: 26px;
  max-width: 50%;
  margin-bottom: 20px;
  @media ${theme.media.tablet}{
    max-width: 80%;
  }
  @media ${theme.media.mobile}{
    max-width: 100%;
  }
`;
const FieldsWrapper = styled.fieldset`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media ${theme.media.mobile}{
    grid-template-columns: 1fr;
  }
`;
const FieldWrapper = styled.label`
  position: relative;
  display: block;
  width: 100%;
  grid-column: 1/2;
  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
    width: 40px;
    aspect-ratio: 1;
    background: linear-gradient(
      45deg,
      ${theme.colors.gradientLight} 30%,
      ${theme.colors.gradientDark}
    );
    pointer-events: none;
    border-radius: 10px;
  }
  @media ${theme.media.mobile}{
    grid-column: 1/2;
  }
`;
const Field = styled.input.attrs(() => ({ type: "text" }))`
  padding: 15px;
  padding-left: 60px;
  border: 1px solid ${theme.colors.lightGrey};
  width: 100%;
  outline: none;
  font-size: 18px;
  color: ${theme.colors.primery};
  border-radius: 15px;
  &::placeholder {
    color: ${theme.colors.lightGrey};
    font-size: 18px;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%);
  width: 40px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
`;
const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid ${theme.colors.lightGrey};
  width: 100%;
  outline: none;
  font-size: 18px;
  color: ${theme.colors.primery};
  font-family: inherit;
  border-radius: 15px;
  &::placeholder {
    color: ${theme.colors.lightGrey};
    font-size: 18px;
  }

  resize: none;
  grid-column: 2/3;
  grid-row: 1/4;
    @media ${theme.media.mobile}{
    grid-column: 1/2;
    grid-row: auto;
  }
`;
