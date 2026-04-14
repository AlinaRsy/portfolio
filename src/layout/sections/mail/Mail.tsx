import styled from "styled-components"
import { theme } from "../../../styles/Theme.styled"
import { FlexWrapper } from "../../../components/FlexWrapper"

export function Mail() {
    return (
        <FlexWrapper justify="center">
            <StyledMail>
                For any questions please mail me: <br/>
                <span>al.alinarsy616@gmail.com</span>
            </StyledMail>
        </FlexWrapper>
    )
}
const StyledMail = styled.p`
    font-size: 58px;
    line-height: 70px;
    font-weight: 700;
    letter-spacing: -1px;
    text-align: center;
    font-family: ${theme.fonts.secondery};
    color: #1E0E62;
    max-width: 70%;
    span{
        background: linear-gradient(90deg, #13B0F5, #E70FAA);
        background-clip: text;
        color: transparent;
        font-weight: 600;
    }
`