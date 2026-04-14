import styled from "styled-components";
import { Socials } from "../../components/socials/Socials";
import { StyledMenu } from "../../components/menu/StyledMenu.styled";
import { theme } from "../../styles/Theme.styled";

export function HeaderNavigation() {
    return (
        <StyledHeaderNavigation>
            <StyledMenu size="20px" color={theme.colors.darkGrey} weight="500">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Tech Stack</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </StyledMenu>
            <Socials />
        </StyledHeaderNavigation>
    )
}
const StyledHeaderNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 52px;
`