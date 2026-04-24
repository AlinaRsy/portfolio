import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { theme } from "../../styles/Theme.styled"
import { FlexWrapper } from "../FlexWrapper"
type ProjectProps = {
    id: number,
    title: string,
    description: string,
    stack: string[],
    image: string
}
export function Project(props: ProjectProps) {
    return (
        <StyledProject>
            <StyledImg src={props.image} alt="#" />
            <StyledProjectBody>
                <StyledProjectTitle>{props.title}</StyledProjectTitle>
                <StyledDescription>{props.description}</StyledDescription>
                <StyledProjectStack><TitleStack>Tech stack :</TitleStack> <StackItem>{props.stack.map((item,index) => index < props.stack.length-1 ? `${item} , `  : item)}</StackItem></StyledProjectStack>
                <FlexWrapper align="center" gap="48px">
                    <StyledLink aria-label="Live Preview" href="#">
                        <Icon iconId="linkSvg" width="17" height="17" color="none"/>
                        Live Preview
                    </StyledLink>
                    <StyledLink aria-label="View Code" href="#">
                        <Icon iconId="githubSvg" width="20" height="20" viewBox="0 0 30 30" color="currentColor" />
                        View Code
                    </StyledLink>
                </FlexWrapper>
            </StyledProjectBody>
        </StyledProject>
    )
}
const StyledProject = styled.article`
    box-shadow: ${theme.styles.shadow};
    border-radius: 20px;
`
const StyledImg = styled.img`
    width: 100%;
    aspect-ratio: 75/52;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
`
const StyledProjectBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 28px 30px;
`
const StyledProjectTitle = styled.h3`
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 12px;
`
const StyledDescription = styled.p`
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    color: ${theme.colors.darkGrey};
    margin-bottom: 12px;
`
const StyledProjectStack = styled.div`
    color: ${theme.colors.primery};
    margin-bottom: 24px;
`
const TitleStack = styled.h4`
    font-weight: 400;
    font-size: 16px;
    display: inline;
`
const StackItem = styled.span`
    font-weight: 300;
    font-size: 14px;
`
const StyledLink = styled.a`
    text-decoration: underline;
    display: flex;
    align-items: center;
    gap: 5px;
    color: black;
    font-size: 16px;
    white-space: nowrap;
`