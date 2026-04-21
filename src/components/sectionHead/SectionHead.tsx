import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { theme } from "../../styles/Theme.styled"
type SectionHeadProps = {
    title?: string,
    description?: string,
    margin?:string
}
export function SectionHead(props: SectionHeadProps) {
    return (
        <StyledSectionHead margin={props.margin}>
            <FlexWrapper direction="column" align="center" justify="center" gap="30px">
                <StyledSectionTitle>{props.title}</StyledSectionTitle>
                <StyledSectionDescription>{props.description}</StyledSectionDescription>
            </FlexWrapper>
        </StyledSectionHead>
    )
}
const StyledSectionHead = styled.div<SectionHeadProps>`
    margin-bottom: ${props=>props.margin || '110px'};
`
const StyledSectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    color: ${theme.colors.primery};
`
const StyledSectionDescription = styled.p`
    font-size: 32px;
    color: ${theme.colors.darkGrey};
`