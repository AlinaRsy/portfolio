import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";
type MenuProps = {
    color?: string,
    size?: string,
    weight?: string,
}
export const StyledMenu = styled.nav<MenuProps>`
    ul {
        display: flex;
        gap: 52px;
    }
    a{
        font-family: ${theme.fonts.secondery};
        color: ${props=>props.color || 'black'};
        font-size: ${props=>props.size || '18px'};
        font-weight: ${props=>props.weight || '400'};
    }
`
