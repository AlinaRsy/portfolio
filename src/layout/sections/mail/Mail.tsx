import styled from "styled-components"
import { theme } from "../../../styles/Theme.styled"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"

export function Mail() {
    return (
        <StyledMail>
            <Container>
                <Form>

                </Form>
                <MailMessage>
                    <FlexWrapper justify="center">
                        <MailText>
                            <p>For any questions please mail me: </p>
                            <a href="mailto:al.alinarsy616@gmail.com">al.alinarsy616@gmail.com</a>
                        </MailText>
                    </FlexWrapper>
                </MailMessage>
            </Container>
        </StyledMail>

    )
}
const StyledMail = styled.section`
    padding: 100px 0;
`
const Form = styled.form`
    width: 100%;
    aspect-ratio: 3/1;
    box-shadow: 2px 2px 100px 0 #00000028;
    margin-bottom: 50px;
    border-radius: 20px;
`
const MailMessage = styled.div`
`;
const MailText = styled.p`
    font-size: 58px;
    line-height: 70px;
    font-weight: 700;
    letter-spacing: -1px;
    text-align: center;
    font-family: ${theme.fonts.secondery};
    color: #1E0E62;
    max-width: 70%;
    a{
        background: linear-gradient(90deg, ${theme.colors.gradientDark}, ${theme.colors.gradientLight});
        background-clip: text;
        color: transparent;
    }
`