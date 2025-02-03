import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  OPACITY,
  SHADOWS,
  SPACING,
  TRANSITIONS,
  Z_INDEX,
} from "../constants/theme"

import profileImage from "../assets/drew.jpg"
import resumePDF from "../assets/drew-ball-resume.pdf"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useThemeStore } from "../store/themeStore"

const HeroSection = styled.section`
  padding: ${SPACING.XXLARGE} ${SPACING.LARGE};
  background-color: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
`

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: ${Z_INDEX.BASE};
`

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: ${SPACING.LARGE} auto;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.accent};
  box-shadow: ${SHADOWS.MEDIUM};
  transition: ${TRANSITIONS.DEFAULT};

  &:hover {
    transform: scale(1.05);
  }
`

const Greeting = styled.h2`
  font-size: ${FONT_SIZES.LARGE};
  color: ${({ theme }) => theme.accent};
`

const Title = styled.h1`
  font-size: ${FONT_SIZES.XXXLARGE};
  color: ${({ theme }) => theme.primary};
  margin: ${SPACING.SMALL} 0;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.XXLARGE};
  }
`

const Description = styled.p`
  font-size: ${FONT_SIZES.MEDIUM};
  line-height: ${LINE_HEIGHTS.BASE};
  color: ${({ theme }) => theme.text};
  margin: ${SPACING.MEDIUM} auto;
  max-width: ${BREAKPOINTS.TABLET};
  opacity: ${OPACITY.HIGH};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.MEDIUM};
    padding: 0 ${SPACING.MEDIUM};
  }
`

const CTAContainer = styled.div`
  display: flex;
  gap: ${SPACING.XSMALL};
  margin-top: ${SPACING.MEDIUM};
  justify-content: center;
`

const ButtonBase = styled.button`
  border-radius: ${BORDER_RADIUS.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.LARGE};
  font-size: ${FONT_SIZES.MEDIUM};
  cursor: pointer;
  transition: ${TRANSITIONS.DEFAULT};
  box-shadow: ${SHADOWS.SMALL};
  border: none;
  outline: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${SHADOWS.MEDIUM};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 2px;
  }
`

const PrimaryButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
`

const SecondaryButton = styled(ButtonBase)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`

const BackgroundDecoration = styled.div<{
  isDarkMode: boolean
}>`
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 200%;
  background: ${({ theme }) => theme.secondary};
  transform: rotate(-35deg);
  z-index: ${Z_INDEX.BACKGROUND};
  opacity: ${({ isDarkMode }) => (isDarkMode ? 0.5 : 1.5)};
`

export function Hero() {
  const { isDarkMode } = useThemeStore()
  const navigate = useNavigate()

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = resumePDF
    link.download = "drew-ball-resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <HeroSection>
      <BackgroundDecoration isDarkMode={isDarkMode} />
      <Content>
        <Greeting>Hi, I'm</Greeting>
        <Title>Drew Ball</Title>
        <ProfileImage src={profileImage} alt="Drew Ball" />
        <Description>
          Senior Software Engineer specializing in modern frontend
          architectures. Crafting exceptional user experiences with a deep
          understanding of end-to-end development.
        </Description>
        <CTAContainer>
          <PrimaryButton onClick={handleDownload}>
            Download Resume
          </PrimaryButton>
          <SecondaryButton onClick={() => navigate("/contact")}>
            Get in Touch
          </SecondaryButton>
        </CTAContainer>
      </Content>
    </HeroSection>
  )
}
