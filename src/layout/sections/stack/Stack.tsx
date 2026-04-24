import styled from "styled-components";
import { SectionHead } from "../../../components/sectionHead/SectionHead";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";

const stack = [
  "html",
  "css",
  "js",
  "react",
  "redux",
  "bootstrap",
  "tailwind",
  "sass",
  "git",
  "greensock",
  "vscode",
  "github",
];
export function Stack() {
  return (
    <StyledStack>
      <Container>
        <SectionHead
          title="My Tech Stack"
          description="Technologies I’ve been working with recently"
        />
        <SkillsWrapper>
          {stack.map((item, index) => (
            <Skill>
              <Icon
                key={item}
                iconId={`st${index + 1}Svg`}
                width="100"
                height="100"
              />
            </Skill>
          ))}
        </SkillsWrapper>
      </Container>
    </StyledStack>
  );
}
const StyledStack = styled.section`
  padding: 100px 0;
`;
const SkillsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 100px;
  overflow: hidden;
`;
const Skill = styled.li`
  display: flex;
  justify-content: center;
`;
