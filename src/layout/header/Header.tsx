import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { HeaderNavigation } from "./HeaderNavigation"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Container } from "../../components/Container"

export function Header() {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center" gap="20px">
                    <Logo iconId="logoGradientSvg"/>
                    <HeaderNavigation />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 40px 0;
`