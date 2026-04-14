import styled from "styled-components"
import photo from '../../../assets/images/myphoto.webp';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme.styled";
export function Main() {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-between" >
                <MainTitle>
                    Hi 👋, <br />
                    My name is <br /> <span>AlinaRsy</span> <br /> I'm a web developer
                </MainTitle>
                <PhotoWrapper>
                    <Photo src={photo} alt="Photo" />
                </PhotoWrapper>
            </FlexWrapper>
        </StyledMain>
    )
}
const StyledMain = styled.section`
    /* min-height: 70vh; */
    padding: 220px 0 200px 0;
    ${FlexWrapper}{
        height: 100%;
    }
`
const Photo = styled.img`
    width: 350px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
`
const PhotoWrapper = styled.div`
    /* width: 358px;
    aspect-ratio: 1; */
    padding: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(${theme.colors.gradientLight}, ${theme.colors.gradientDark});

`
const MainTitle = styled.h1`
    font-size: 58px;
    font-weight: 700;
    max-width: 60%;
    line-height: 121%;
    text-align: left;
    letter-spacing: -1px;
    color: ${theme.colors.primery};
    span{
        background: linear-gradient(90deg, ${theme.colors.gradientDark} 10%, ${theme.colors.gradientLight});
        background-clip: text;
        color: transparent;
    }
`
