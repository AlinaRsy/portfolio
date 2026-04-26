import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme.styled";
import { Icon } from "../../components/icon/Icon";
import { Socials } from "../../components/socials/Socials";
import { Container } from "../../components/Container";
import { Menu } from "../../components/menu/Menu";
import { Logo } from "../../components/logo/Logo";

export function Footer() {
  const menuItems = ["Home", "About", "Tech Stack", "Projects", "Contacts"];
  return (
    <StyledFooter>
      <Container>
        <StyledFooterTop>
          <FlexWrapper justify="space-between" align="center">
            <Logo iconId="logoDarkSvg" />
            <FlexWrapper gap="40px" align="center">
              <StyledLink href="tel:+91 12345 09876">
                +91 12345 09876
              </StyledLink>
              <StyledLink href="mailto:info@example.com">
                info@example.com
              </StyledLink>
              <Socials color={theme.colors.primery} />
            </FlexWrapper>
          </FlexWrapper>
        </StyledFooterTop>
        <StyledFooterBottom>
          <FlexWrapper justify="space-between" align="center">
            <Menu color={theme.colors.primery} menuItems={menuItems} />
            <StyledCopyright>
              Designed and built by{" "}
              <GradientWrapper>
                <span> AlinaRsy </span> with <span> Love </span> &{" "}
                <span> Coffee </span>
              </GradientWrapper>
            </StyledCopyright>
          </FlexWrapper>
        </StyledFooterBottom>
      </Container>
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  padding: 100px 0 60px 0;
  @media ${theme.media.mobile} {
    padding: 50px 0 40px 0;
  }
`;
const StyledFooterTop = styled.div`
  padding-bottom: 40px;
  border-bottom: 2px solid ${theme.colors.lightGrey};
  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      ${FlexWrapper} {
        flex-direction: column;
        gap:20px;
      }
    }
  }
`;
const StyledLink = styled.a`
  color: ${theme.colors.primery};
  font-size: 18px;
  font-family: ${theme.fonts.secondery};
`;
const StyledFooterBottom = styled.div`
  padding-top: 45px;
  @media ${theme.media.tablet} {
    nav ul{
      gap:30px;
    }
    ${FlexWrapper}{
        flex-direction: column;
        gap:30px;
    }
  }
`;
const StyledCopyright = styled.small`
  font-size: 18px;
  color: ${theme.colors.darkGrey};
`;
const GradientWrapper = styled.span`
  background: linear-gradient(
    90deg,
    ${theme.colors.gradientDark},
    ${theme.colors.gradientLight}
  );
  background-clip: text;
  span {
    color: transparent;
  }
`;
