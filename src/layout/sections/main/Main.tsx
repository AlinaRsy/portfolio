import styled from "styled-components";
import photo from "../../../assets/images/myphoto.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme.styled";
import { Container } from "../../../components/Container";
import iconsSprite from "../../../assets/images/code-svg.svg";
import { font } from "../../../styles/Common";
export function Main() {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between" wrap="wrap">
          <MainTitle>
            <p>Hi 👋, </p>
            <p>My name is </p>
            <span>AlinaRsy</span>
            <p>I'm a web developer</p>
          </MainTitle>
          <PhotoWrapper>
            <Photo src={photo} alt="Photo" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
}
const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  ${FlexWrapper} {
    height: 100%;
  }
  @media ${theme.media.tabletMax} {
    padding: 120px 0;
  }
  ${FlexWrapper} {
    @media ${theme.media.tabletMax} {
      justify-content: center;
      align-items: center;
    }
  }
`;
const Photo = styled.img`
  width: 350px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  @media ${theme.media.tabletMax} {
    width: 300px;
  }
  @media ${theme.media.mobile} {
    width: 260px;
  }
`;
const PhotoWrapper = styled.div`
  padding: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(
    ${theme.colors.gradientLight},
    ${theme.colors.gradientDark}
  );
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 150%;
    z-index: 0;
    background: url("/src/assets/images/abstract.svg") center / contain
      no-repeat;
    /* background: url(${iconsSprite}#abstract) center / contain no-repeat; */
  }
  margin-right: 80px;

`;
const MainTitle = styled.h1`
  ${font({
    weight: 700,
    lineHeight: "122%",
    color: theme.colors.primery,
    Fmin: 32,
    Fmax: 58,
  })};
  text-align: left;
  letter-spacing: -1px;
  span {
    background: linear-gradient(
      90deg,
      ${theme.colors.gradientDark} 10%,
      ${theme.colors.gradientLight}
    );
    background-clip: text;
    color: transparent;
  }
    @media ${theme.media.mobile} {
    margin-bottom: 30px;
  }
`;
