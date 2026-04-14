import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { HeaderNavigation } from "./HeaderNavigation"
import { FlexWrapper } from "../../components/FlexWrapper"

export function Header() {
    return (
        <StyledHeader>
            <FlexWrapper justify="space-between" align="center">
                <Logo />
                <HeaderNavigation />
            </FlexWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding-top: 41px;
`