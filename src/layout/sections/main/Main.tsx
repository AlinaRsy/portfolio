import styled from "styled-components"
import photo from '../../../assets/images/myphoto.webp';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme.styled";
import { Container } from "../../../components/Container";
export function Main() {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-between" >
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
    padding: 180px 0 100px 0;
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
