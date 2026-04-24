import styled, { css } from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme.styled";
import { useState } from "react";
type TabProps = {
  active?: boolean;
};
const tabs = ["All", "SPA", "React", "Landing"];
export function Tabs() {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <StyledTabs>
      <FlexWrapper gap="20px" justify="center">
        {tabs.map((item, index) => (
          <Tab
            onClick={() => setActiveTab(item)}
            active={activeTab === item}
            key={index}
          >
            {item}
          </Tab>
        ))}
      </FlexWrapper>
    </StyledTabs>
  );
}
const StyledTabs = styled.div`
  margin: 20px 0 50px 0;
`;
const Tab = styled.button<TabProps>`
  width: 140px;
  padding: 10px 0;
  font-size: 22px;
  position: relative;
  color: ${theme.colors.primery};
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 0%;
    height: 2px;
    border-radius: 2px;
    transition: 0.2s ease-in;
  }
  &::before {
    top: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      ${theme.colors.gradientLight} 60%,
      ${theme.colors.gradientDark}
    );
  }
  &::after {
    bottom: 0;
    left: 0;
    width: 0%;
    background: linear-gradient(
      90deg,
      ${theme.colors.gradientDark},
      ${theme.colors.gradientLight} 40%
    );
  }
  ${(props) =>
    props.active &&
    css`
      &::before {
        width: 100%;
      }
      &::after {
        width: 100%;
      }
    `}
`;
