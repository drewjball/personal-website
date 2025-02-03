import {
  BORDER_RADIUS,
  FONT_SIZES,
  SPACING,
  TRANSITIONS,
} from "../constants/theme"
import { FiMoon, FiSun } from "react-icons/fi"

import styled from "styled-components"
import { useThemeStore } from "../store/themeStore"

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACING.SMALL};
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: ${SPACING.SMALL};
  font-size: ${FONT_SIZES.XLARGE};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${TRANSITIONS.DEFAULT};
  border-radius: ${BORDER_RADIUS.SMALL};
  width: 40px;
  height: 40px;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }

  svg {
    transition: ${TRANSITIONS.TRANSFORM};
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`

export function Header() {
  const { isDarkMode, toggleTheme } = useThemeStore()

  return (
    <HeaderContainer>
      <ThemeToggle
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </ThemeToggle>
    </HeaderContainer>
  )
}
