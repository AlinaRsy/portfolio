import styled from "styled-components"
import { theme } from "../../styles/Theme.styled"
type MenuProps = {
    // device?: string,
    color?: string,
    size?: string,
    weight?: string,
    menuItems: string[],
}
type MenuStyleProps = {
    // device?: string,
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
const StyledList = styled.ul<MenuStyleProps>`
    display: flex;
    gap: 52px;
    @media ${theme.media.tabletMax} {
        gap: 44px;
        flex-direction: column;
    }
`
const StyledMenuItem = styled.li<MenuStyleProps>`
    font-family: ${theme.fonts.secondery};
    color: ${props => props.color || 'black'};
    font-size: ${props => props.size || '18px'};
    font-weight: ${props => props.weight || '400'};
    a{
        color: inherit;
        white-space: nowrap;
    }
`