import styled, { css } from "styled-components";
import { Socials } from "../../components/socials/Socials";
import { theme } from "../../styles/Theme.styled";
import { Menu } from "../../components/menu/Menu";
import { useState } from "react";
type NavigationProps = {
  menuItems: string[];
};
export function MobileMenu({ menuItems }: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledMobileNavigation>
      <BurgerButton onClick={()=>setIsOpen(!isOpen)} isOpen={isOpen}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={isOpen}>
        <Menu
          device="mobile"
          menuItems={menuItems}
          size="24px"
          color={theme.colors.darkGrey}
          weight="500"
        />
        <Socials color={theme.colors.darkGrey} />
      </MobileMenuPopup>
    </StyledMobileNavigation>
  );
}
const StyledMobileNavigation = styled.div`
  display: none;
  @media ${theme.media.tabletMax} {
    display: block;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #93efff;
  display: none;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      gap: 44px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  z-index: 99999;
  top: 40px;
  right: 20px;
  width: 40px;
  height: 40px; /* Лучше сделать высоту 40px для круглых чисел */
  cursor: pointer;
  background: transparent;
  border: none;
  
  span,
  &::before,
  &::after {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${theme.colors.darkGrey};
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  span {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${props => props.isOpen ? 0 : 1};
  }
  
  &::before {
    content: "";
    top: ${props => props.isOpen ? '50%' : '8px'};
    transform: ${props => props.isOpen ? 'translateY(-50%) rotate(45deg)' : 'none'};
  }
  
  &::after {
    content: "";
    bottom: ${props => props.isOpen ? '50%' : '8px'};
    transform: ${props => props.isOpen ? 'translateY(50%) rotate(-45deg)' : 'none'};
  }
`;
