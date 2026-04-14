import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { theme } from "../../styles/Theme.styled"
type SectionHeadProps = {
    title: string,
    description: string
}
export function SectionHead(props: SectionHeadProps) {
    return (
        <FlexWrapper direction="column" align="center" justify="center" gap="49px">
            <StyledSectionTitle>{props.title}</StyledSectionTitle>
            <StyledSectionDescription>{props.description}</StyledSectionDescription>
        </FlexWrapper>
    )
}

const StyledSectionTitle = styled.h3`
    font-weight: 700;
    font-size: 48px;
    line-height: 26px;
    color: ${theme.colors.primery};
`
const StyledSectionDescription = styled.p`
    font-size: 32px;
    line-height: 26px;
    color: ${theme.colors.darkGrey};
    padding-bottom: 110px;
`