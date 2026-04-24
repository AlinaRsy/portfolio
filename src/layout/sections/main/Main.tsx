import styled from "styled-components"
import photo from '../../../assets/images/myphoto.webp';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme.styled";
import { Container } from "../../../components/Container";
import iconsSprite from '../../../assets/images/code-svg.svg';
export function Main() {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-between" wrap="wrap">
                    <MainTitle>
                        <p>Hi 👋, </p>
                        <p>My name is  </p>
                        <span>AlinaRsy</span>  
                        <p>I'm a web developer</p>
                    </MainTitle>
                    <PhotoWrapper>
                        <Photo src={photo} alt="Photo" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}
const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
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
    padding: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(${theme.colors.gradientLight}, ${theme.colors.gradientDark});
    position: relative;
    &::before{
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
        width: 150%;  
        height: 150%; 
        z-index: -1;
        background: url('/src/assets/images/abstract.svg') center / contain no-repeat;
        /* background: url(${iconsSprite}#abstract) center / contain no-repeat; */
    }
`
const MainTitle = styled.h1`
    font-size: 58px;
    font-weight: 700;
    max-width: 60%;
    line-height: 122%;
    text-align: left;
    letter-spacing: -1px;
    color: ${theme.colors.primery};
    span{
        background: linear-gradient(90deg, ${theme.colors.gradientDark} 10%, ${theme.colors.gradientLight});
        background-clip: text;
        color: transparent;
    }
`
