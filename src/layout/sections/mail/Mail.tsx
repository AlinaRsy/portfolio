import styled from "styled-components";
import { theme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Form } from "../../../components/form/Form";
import { font } from "../../../styles/Common";

export function Mail() {
  return (
    <StyledMail>
      <Container>
        <Form />
        <MailMessage>
          <FlexWrapper justify="center">
            <MailText>
              <p>For any questions please mail me: </p>
              <a href="mailto:al.alinarsy616@gmail.com">
                al.alinarsy616@gmail.com
              </a>
            </MailText>
          </FlexWrapper>
        </MailMessage>
      </Container>
    </StyledMail>
  );
}
const StyledMail = styled.section``;
const MailMessage = styled.div``;
const MailText = styled.p`
  ${font({
    lineHeight: "70px",
    color: "#1e0e62",
    family: theme.fonts.secondery,
    Fmin: 30,
    Fmax: 58,
    weight: 700,
  })}
  letter-spacing: -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 70%;
  a {
    background: linear-gradient(
      90deg,
      ${theme.colors.gradientDark},
      ${theme.colors.gradientLight}
    );
    background-clip: text;
    color: transparent;
  }
  @media ${theme.media.tablet} {
    max-width: 80%;
    line-height: 50px;
  }
  @media ${theme.media.mobile} {
    max-width: 90%;
    line-height: 40px;
  }
`;
