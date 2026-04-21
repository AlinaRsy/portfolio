import styled from "styled-components"
import { SectionHead } from "../../../components/sectionHead/SectionHead"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { Container } from "../../../components/Container"

export function Stack() {
    return (
        <StyledStack>
            <Container>
                <SectionHead title="My Tech Stack" description="Technologies I’ve been working with recently" />
                <FlexWrapper gap="95px" justify="space-between" align="center" wrap="wrap">
                    {
                        [...Array(12)].map((_, index) => <Icon key={index} iconId={`st${index + 1}Svg`} width="120" height="120" />)
                    }
                </FlexWrapper>
            </Container>
        </StyledStack>
    )
}
const StyledStack = styled.section`
    padding: 100px 0;
`