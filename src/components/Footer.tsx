import {
  BREAKPOINTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  OPACITY,
  SPACING,
  TRANSITIONS,
} from "../constants/theme"
import {
  FiDownload,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiYoutube,
} from "react-icons/fi"

import { Link } from "react-router-dom"
import { RiTwitterXFill } from "react-icons/ri"
import resumePDF from "../assets/drew-ball-resume.pdf"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.glass};
  backdrop-filter: blur(10px);
  padding: ${SPACING.XLARGE} ${SPACING.LARGE};
  margin-top: ${SPACING.SMALL};
  border-top: 1px solid ${({ theme }) => theme.border};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding: ${SPACING.LARGE};
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: ${SPACING.MEDIUM};
  }
`

const FooterContent = styled.div`
  max-width: ${BREAKPOINTS.DESKTOP};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${SPACING.XLARGE};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${SPACING.LARGE};
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    grid-template-columns: 1fr;
    gap: ${SPACING.MEDIUM};
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.SMALL};

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: ${SPACING.SMALL} 0;
    border-bottom: 1px solid ${({ theme }) => theme.border};

    &:last-child {
      border-bottom: none;
    }
  }
`

const FooterTitle = styled.h3`
  font-size: ${FONT_SIZES.MEDIUM};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    margin-bottom: ${SPACING.XSMALL};
    width: fit-content;
  }
`

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: ${FONT_SIZES.SMALL};
  transition: ${TRANSITIONS.DEFAULT};
  display: flex;
  align-items: center;
  gap: ${SPACING.XXSMALL};

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateX(4px);
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    &:hover {
      transform: translateX(0) scale(1.05);
    }
  }
`

const ExternalLink = styled.a.attrs({
  rel: "noopener noreferrer",
  target: "_blank",
})`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: ${FONT_SIZES.SMALL};
  transition: ${TRANSITIONS.DEFAULT};
  display: flex;
  align-items: center;
  gap: ${SPACING.XXSMALL};

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateX(4px);
  }

  svg {
    font-size: ${FONT_SIZES.MEDIUM};
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    &:hover {
      transform: translateX(0) scale(1.05);
    }
  }
`

const Copyright = styled.p`
  text-align: center;
  margin-top: ${SPACING.XLARGE};
  padding-top: ${SPACING.MEDIUM};
  border-top: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  font-size: ${FONT_SIZES.SMALL};
  opacity: ${OPACITY.MEDIUM};

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    margin-top: ${SPACING.MEDIUM};
    padding-top: ${SPACING.SMALL};
  }
`

const FooterNav = styled.nav`
  // styles from FooterSection
`

const handleDownload = async () => {
  try {
    const link = document.createElement("a")
    link.href = resumePDF
    link.download = "drew-ball-resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error("Failed to download resume:", error)
  }
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterNav aria-label="Site navigation">
            <FooterTitle>Navigation</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/portfolio">Portfolio</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterNav>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink to="#" onClick={handleDownload}>
            <FiDownload />
            Resume
          </FooterLink>
          <ExternalLink href="https://github.com/drewjball">
            <FiGithub />
            GitHub
          </ExternalLink>
          <ExternalLink href="https://linkedin.com/in/drew-ball-b42912166">
            <FiLinkedin />
            LinkedIn
          </ExternalLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Social</FooterTitle>
          <ExternalLink href="https://x.com/drewjball">
            <RiTwitterXFill />X
          </ExternalLink>
          <ExternalLink href="https://instagram.com/drewjball">
            <FiInstagram />
            Instagram
          </ExternalLink>
          <ExternalLink href="https://youtube.com/@drewjball">
            <FiYoutube />
            YouTube
          </ExternalLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <ExternalLink href="mailto:drewjball@gmail.com">
            <FiMail />
            drewjball@gmail.com
          </ExternalLink>
          <ExternalLink href="tel:480-734-0623">
            <FiPhone />
            {`+1 (480) 734-0623`}
          </ExternalLink>
        </FooterSection>
      </FooterContent>
      <Copyright>© {currentYear} Drew Ball. All rights reserved.</Copyright>
    </FooterContainer>
  )
}
