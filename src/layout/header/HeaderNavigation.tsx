import styled from "styled-components";
import { Socials } from "../../components/socials/Socials";
import { theme } from "../../styles/Theme.styled";
import { Menu } from "../../components/menu/Menu";
type NavigationProps = {
    menuItems: string[],
}
export function HeaderNavigation({menuItems}:NavigationProps) {
    return (
        <StyledHeaderNavigation>
            <Menu menuItems={menuItems} size="20px" color={theme.colors.darkGrey} weight="500" />
            <Socials color={theme.colors.darkGrey}/>
        </StyledHeaderNavigation>
    )
}
const StyledHeaderNavigation = styled.div`
    display: flex;
    align-items: center;
    gap: 52px;

    @media ${theme.media.tabletMax} {
        display: none;
    }
`