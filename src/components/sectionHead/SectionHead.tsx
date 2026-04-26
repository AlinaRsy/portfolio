import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { theme } from "../../styles/Theme.styled"
import { font } from "../../styles/Common"
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
    @media ${theme.media.mobile}{
        margin-bottom: ${props=>props.margin ? parseInt(props.margin)/1.5+'px' : '80px'}
    }
`
const StyledSectionTitle = styled.h2`
    ${font({color:theme.colors.primery, weight:700, Fmax:48, Fmin:28})}
`
const StyledSectionDescription = styled.p`
    ${font({color:theme.colors.darkGrey, Fmin:20, Fmax:32})}
`