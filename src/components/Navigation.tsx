import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  OPACITY,
  SHADOWS,
  SPACING,
  TRANSITIONS,
  Z_INDEX,
} from "../constants/theme"
import { FiMoon, FiSun } from "react-icons/fi"
import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import darkLogo from "../assets/db-logo-black.png"
import hoverLogo from "../assets/db-logo-hover.png"
import lightLogo from "../assets/db-logo-white.png"
import styled from "styled-components"
import { useThemeStore } from "../store/themeStore"

const Nav = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.background : theme.glass};
  backdrop-filter: ${({ isOpen }) => (isOpen ? "none" : "blur(10px)")};
  z-index: ${Z_INDEX.NAVIGATION};
  padding: ${SPACING.MEDIUM} ${SPACING.LARGE};
  box-shadow: ${({ isOpen }) => (isOpen ? "none" : SHADOWS.MEDIUM)};
  transition: ${TRANSITIONS.DEFAULT};
  -webkit-backdrop-filter: ${({ isOpen }) => (isOpen ? "none" : "blur(10px)")};
`

const NavContainer = styled.div`
  max-width: ${BREAKPOINTS.DESKTOP};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACING.MEDIUM};
`

const Logo = styled(Link)`
  text-decoration: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  transition: ${TRANSITIONS.TRANSFORM};

  &:hover {
    transform: translateY(-1px);
  }
`

const LogoImage = styled.img<{ isHover?: boolean }>`
  height: 100%;
  width: auto;
  position: absolute;
  transition: opacity 0.3s ease; // One off style
  opacity: ${({ isHover }) => (isHover ? OPACITY.FULL : OPACITY.FULL)};
`

const HoverLogoImage = styled(LogoImage)`
  opacity: ${({ isHover }) => (isHover ? OPACITY.FULL : 0)};
`

const NavList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: ${SPACING.MEDIUM};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    display: none;
  }
`

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: fixed;
    top: 75px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.background};
    padding: ${SPACING.MEDIUM};
    flex-direction: column;
    gap: ${SPACING.SMALL};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    transition: none;
  }
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: ${FONT_SIZES.BASE};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  transition: ${TRANSITIONS.DEFAULT};
  padding: ${SPACING.XXSMALL} ${SPACING.XXSMALL};
  border-radius: ${BORDER_RADIUS.SMALL};

  &:hover {
    color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => theme.secondary};
  }
`

const MenuButton = styled.button<{ isOpen: boolean }>`
  background: none;
  border: none;
  padding: ${SPACING.XSMALL};
  cursor: pointer;
  width: 45px;
  height: 45px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${BORDER_RADIUS.SMALL};
  transition: ${TRANSITIONS.DEFAULT};
  display: none;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    display: flex;
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    margin: 3px 0;
    background-color: ${({ theme }) => theme.text};
    transition: ${TRANSITIONS.DEFAULT};

    &:first-child {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:last-child {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)"};
    }
  }
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: ${SPACING.XSMALL};
  font-size: ${FONT_SIZES.XLARGE};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${TRANSITIONS.DEFAULT};
  border-radius: ${BORDER_RADIUS.SMALL};
  width: 44px;
  height: 44px;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-1px);
  }

  svg {
    transition: ${TRANSITIONS.DEFAULT};
    font-size: ${FONT_SIZES.XLARGE};
  }

  &:hover svg {
    transform: rotate(15deg);
  }
`

export function Navigation() {
  const { isDarkMode, toggleTheme } = useThemeStore()
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Nav isOpen={isOpen}>
      <NavContainer>
        <Logo
          to="/"
          onClick={handleLinkClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <LogoImage
            src={isDarkMode ? lightLogo : darkLogo}
            alt="Drew Ball Logo"
            isHover={isHovered}
          />
          <HoverLogoImage
            src={hoverLogo}
            alt="Drew Ball Logo Hover"
            isHover={isHovered}
          />
        </Logo>
        <NavGroup>
          <NavList isOpen={isOpen}>
            <li>
              <NavLink to="/" onClick={handleLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={handleLinkClick}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={handleLinkClick}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleLinkClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleLinkClick}>
                Contact
              </NavLink>
            </li>
          </NavList>
          <ThemeToggle
            onClick={toggleTheme}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
          <MenuButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </MenuButton>
        </NavGroup>
      </NavContainer>
      <MobileMenu isOpen={isOpen}>
        <NavLink to="/" onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink to="/portfolio" onClick={handleLinkClick}>
          Portfolio
        </NavLink>
        <NavLink to="/blog" onClick={handleLinkClick}>
          Blog
        </NavLink>
        <NavLink to="/about" onClick={handleLinkClick}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={handleLinkClick}>
          Contact
        </NavLink>
      </MobileMenu>
    </Nav>
  )
}
