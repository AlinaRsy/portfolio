import styled from "styled-components";
import { theme } from "../styles/Theme.styled";

export const Button = styled.button`
    background: linear-gradient(45deg, ${theme.colors.gradientLight} 30%, ${theme.colors.gradientDark});
    color: white;
    font-size: 22px;
    font-family: ${theme.fonts.secondery};
    font-weight: 600;
    padding: 15px;
    border-radius: 15px;
`