import styled from "styled-components";
import { Icon } from "../icon/Icon";

export function Socials() {
    return (
        <StyledSocials>
            <li>
                <a href=""><Icon iconId="githubSvg"/></a>
            </li>
            <li>
                <a href=""><Icon iconId="twitterSvg"/></a>
            </li>
            <li>
                <a href=""><Icon iconId="inSvg"/></a>
            </li>
        </StyledSocials>
    )
}
const StyledSocials = styled.ul`
    display: flex;
    gap: 20px;
`
