import styled from "styled-components"
import { FlexWrapper } from "../../components/FlexWrapper"
import { theme } from "../../styles/Theme.styled"
import { Icon } from "../../components/icon/Icon"
import { Socials } from "../../components/socials/Socials"
import { StyledMenu } from "../../components/menu/StyledMenu.styled"

export function Footer() {
    return (
        <StyledFooter>
            <StyledFooterTop>
                <FlexWrapper justify="space-between" align='center'>
                    <a href="#">
                        <Icon iconId="logoSvg" width="97" height="59" />
                    </a>
                    <FlexWrapper gap="40px" align="center">
                        <StyledLink href="tel:+91 12345 09876">+91 12345 09876</StyledLink>
                        <StyledLink href="mailto:info@example.com">info@example.com</StyledLink>
                        <Socials />
                    </FlexWrapper>
                </FlexWrapper>
            </StyledFooterTop>
            <StyledFooterBottom>
                <FlexWrapper justify="space-between" align="center">
                    <StyledMenu color={theme.colors.primery} size="18px">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Tech Stack</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </StyledMenu>
                    <StyledCopyright>
                        Designed and built by <span> Pavan MG </span> with <span> Love </span> & <span> Coffee </span>
                    </StyledCopyright>
                </FlexWrapper>
            </StyledFooterBottom>
        </StyledFooter>
    )
}
const StyledFooter = styled.footer`
    padding-top: 200px;
`
const StyledFooterTop = styled.div`
    padding-bottom: 40px;
    border-bottom: 2px solid ${theme.colors.lightGrey};
`
const StyledLink = styled.a`
    color: ${theme.colors.primery};
    font-size: 18px;
    line-height: 26px;
    font-family: ${theme.fonts.secondery};
`
const StyledFooterBottom = styled.div`
    padding: 45px 0 60px 0;
`
const StyledCopyright = styled.p`
    font-size: 18px;
    line-height: 26px;
    color: ${theme.colors.darkGrey}
    
`