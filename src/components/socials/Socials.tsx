import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme.styled";
type SocialsProps = {
    color: string
}
const linksIcons = ["githubSvg", "twitterSvg", "inSvg"];
export function Socials(props: SocialsProps) {
    return (
        <StyledSocials>
            <StyledList>
                {
                    linksIcons.map(icon => (
                        <li>
                            <StyledLink color={props.color} href="#"><Icon iconId={icon} /></StyledLink>
                        </li>
                    ))
                }
            </StyledList>
        </StyledSocials>
    )
}
const StyledSocials = styled.nav`

`
const StyledList = styled.ul`
    display: flex;
    gap: 20px;
`
const StyledLink = styled.a<SocialsProps>`
    color: ${props => props.color};
    transition: .2s ease-in;
    &:hover{
        color: ${theme.colors.primery};
    }
`
