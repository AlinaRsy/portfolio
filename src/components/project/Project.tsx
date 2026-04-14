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
                <StyledProjectStack><span>Tech stack :</span> {props.stack.map(item => item +' , ')}</StyledProjectStack>
                <FlexWrapper align="center" gap="48px">
                    <StyledLink href="#">
                        <Icon iconId="linkSvg" width="17" height="17"/>
                        <span>Live Preview</span>
                    </StyledLink>
                    <StyledLink href="#">
                        <Icon iconId="githubSvg" width="17" height="17"/>
                        <span>View Code</span>
                    </StyledLink>
                </FlexWrapper>
            </StyledProjectBody>
        </StyledProject>
    )
}
const StyledProject = styled.div`
    flex: 1 0 30%;
    box-shadow: 2px 2px 100px #00000033;
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
const StyledProjectTitle = styled.h4`
    font-size: 28px;
    line-height: 26px;
    font-weight: 500;
    padding-bottom: 17px;
`
const StyledDescription = styled.p`
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    color: ${theme.colors.darkGrey};
    padding-bottom: 12px;
`
const StyledProjectStack = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;
    color: ${theme.colors.primery};
    span{
        font-weight: 400;
        font-size: 16px;
    }
    padding-bottom: 24px;
`
const StyledLink = styled.a`
    text-decoration: underline;
    color: black;
    font-size: 16px;
`