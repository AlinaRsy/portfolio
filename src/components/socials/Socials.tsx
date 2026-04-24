import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme.styled";
type SocialsProps = {
  color: string;
};
const socialLinks = [
  { icon: "githubSvg", ariaLabel: "GitHub profile" },
  { icon: "twitterSvg", ariaLabel: "Twitter profile" },
  { icon: "inSvg", ariaLabel: "LinkedIn profile" },
];
export function Socials(props: SocialsProps) {
  return (
    <StyledSocials>
      <StyledList>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <StyledLink
              aria-label={link.ariaLabel}
              color={props.color}
              href="#"
            >
              <Icon iconId={link.icon} />
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </StyledSocials>
  );
}
const StyledSocials = styled.nav``;
const StyledList = styled.ul`
  display: flex;
  gap: 20px;
`;
const StyledLink = styled.a<SocialsProps>`
  color: ${(props) => props.color};
  transition: 0.2s ease-in;
  &:hover {
    color: ${theme.colors.primery};
  }
`;
