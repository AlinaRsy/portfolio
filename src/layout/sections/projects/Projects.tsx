import styled from "styled-components";
import { SectionHead } from "../../../components/sectionHead/SectionHead";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "../../../components/project/Project";
import proj1 from "../../../assets/images/project1.jpg";
import proj2 from "../../../assets/images/project2.jpg";
import proj3 from "../../../assets/images/project3.jpg";
import proj4 from "../../../assets/images/project4.jpg";
import proj5 from "../../../assets/images/project5.jpg";
import proj6 from "../../../assets/images/project6.jpg";
import { Container } from "../../../components/Container";
import { Tabs } from "../../../components/tabs/Tabs";
const projects = [
  {
    id: 1,
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: ["HTML", "JavaScript", "SASS", "React"],
    image: proj1,
  },
  {
    id: 2,
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: ["HTML", "JavaScript", "SASS", "React"],
    image: proj2,
  },
  {
    id: 3,
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: ["HTML", "JavaScript", "SASS", "React"],
    image: proj3,
  },
  {
    id: 4,
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: ["HTML", "JavaScript", "SASS", "React"],
    image: proj4,
  },
  {
    id: 5,
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: ["HTML", "JavaScript", "SASS", "React"],
    image: proj5,
  },
  {
    id: 6,
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: ["HTML", "JavaScript", "SASS", "React"],
    image: proj6,
  },
];
export function Projects() {
  return (
    <StyledProjects>
      <Container>
        <SectionHead
          title="Projects"
          description="Things I’ve built so far"
          margin="50px"
        />
        <Tabs />
        <ProjectsWrapper>
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </ProjectsWrapper>
      </Container>
    </StyledProjects>
  );
}
const StyledProjects = styled.section`
  padding: 100px 0;
`;
const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  gap: 34px;
`;
