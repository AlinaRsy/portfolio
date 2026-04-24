import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { HeaderNavigation } from "./HeaderNavigation"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Container } from "../../components/Container"
import { MobileMenu } from "./MobileMenu"
const menuItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];
export function Header() {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center" gap="20px">
                    <Logo iconId="logoGradientSvg"/>
                    <HeaderNavigation menuItems={menuItems}/>
                    <MobileMenu menuItems={menuItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 40px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`