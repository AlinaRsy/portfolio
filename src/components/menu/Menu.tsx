import styled from "styled-components"
import { theme } from "../../styles/Theme.styled"
type MenuProps = {
    color?: string,
    size?: string,
    weight?: string,
    menuItems: string[],
}
type MenuItemStyleProps = {
    color?: string;
    size?: string;
    weight?: string;
};
export function Menu(props: MenuProps) {
    return (
        <StyledMenu>
            <StyledList>
                {
                    props.menuItems.map((item, index) => (
                        <StyledMenuItem key={index} color={props.color} size={props.size} weight={props.weight}><a href="#">{item}</a></StyledMenuItem>
                    ))
                }
            </StyledList>
        </StyledMenu>
    )
}
const StyledMenu = styled.nav`
`
const StyledList = styled.ul`
    display: flex;
    gap: 52px;
`
const StyledMenuItem = styled.li<MenuItemStyleProps>`
    font-family: ${theme.fonts.secondery};
    color: ${props => props.color || 'black'};
    font-size: ${props => props.size || '18px'};
    font-weight: ${props => props.weight || '400'};
    a{
        color: inherit;
        white-space: nowrap;
    }
`