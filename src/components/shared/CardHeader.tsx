import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZES,
  OPACITY,
  SPACING,
} from "../../constants/theme"

import asuLogo from "../../assets/asu-logo.jpg"
import boozAllenLogo from "../../assets/booz-allen-logo.webp"
import issaLogo from "../../assets/issa-logo.png"
import silverbackLogo from "../../assets/silverback-marketing-logo.webp"
import styled from "styled-components"

const CardHeaderContainer = styled.div`
  display: flex;
  gap: ${SPACING.MEDIUM};
  align-items: center;

  @media (max-width: ${BREAKPOINTS.INTERMEDIATE}) {
    flex-direction: column;
    gap: ${SPACING.SMALL};
  }
`
export const CardTitle = styled.h3`
  font-size: ${FONT_SIZES.LARGE};
  color: ${({ theme }) => theme.primary};
  margin-bottom: ${SPACING.XXSMALL};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.MEDIUM};
  }
`

export const CardSubtitle = styled.h4`
  font-size: ${FONT_SIZES.MEDIUM};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.XXSMALL};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.SMALL};
  }
`
const CardSubtitleGroup = styled.div`
  // Basic div
`

const GroupContainer = styled.div`
  div:last-child {
    margin-top: ${SPACING.XSMALL};
  }
`

export const CardInfo = styled.div`
  flex: 1;

  @media (max-width: ${BREAKPOINTS.INTERMEDIATE}) {
    text-align: center;
    margin-top: ${SPACING.SMALL};
  }
`

export const Period = styled.span`
  font-size: ${FONT_SIZES.SMALL};
  color: ${({ theme }) => theme.text};
  opacity: ${OPACITY.MEDIUM};
`

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${BORDER_RADIUS.MEDIUM};
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    width: 80px;
    height: 80px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export function CardHeader({ location }: { location: string }) {
  switch (location) {
    case "Booz Allen Hamilton":
      return (
        <CardHeaderContainer>
          <Logo>
            <img src={boozAllenLogo} alt="Booz Allen Hamilton logo" />
          </Logo>
          <CardInfo>
            <CardTitle>Booz Allen Hamilton</CardTitle>
            <CardSubtitle>Senior Consultant – Staff Engineer</CardSubtitle>
            <Period>April 2024 – Present</Period>
          </CardInfo>
        </CardHeaderContainer>
      )
    case "International Sports Sciences Association":
      return (
        <CardHeaderContainer>
          <Logo>
            <img src={issaLogo} alt="ISSA logo" />
          </Logo>
          <CardInfo>
            <CardTitle>International Sports Sciences Association</CardTitle>
            <GroupContainer>
              <CardSubtitleGroup>
                <CardSubtitle>Front End Engineer I</CardSubtitle>
                <Period>April 2022 – April 2024</Period>
              </CardSubtitleGroup>
              <CardSubtitleGroup>
                <CardSubtitle>Front End Engineer / Page Builder</CardSubtitle>
                <Period>September 2021 – April 2022</Period>
              </CardSubtitleGroup>
            </GroupContainer>
          </CardInfo>
        </CardHeaderContainer>
      )
    case "Silverback Marketing":
      return (
        <CardHeaderContainer>
          <Logo>
            <img src={silverbackLogo} alt="Silverback Marketing logo" />
          </Logo>
          <CardInfo>
            <CardTitle>Silverback Marketing</CardTitle>
            <CardSubtitle>Junior SEO Specialist / Web Developer</CardSubtitle>
            <Period>March 2018 – June 2021</Period>
          </CardInfo>
        </CardHeaderContainer>
      )
    default:
    case "Arizona State University":
      return (
        <CardHeaderContainer>
          <Logo>
            <img src={asuLogo} alt="Arizona State University logo" />
          </Logo>
          <CardInfo>
            <CardTitle>Arizona State University</CardTitle>
            <CardSubtitle>Bachelor of Arts in Business Technology</CardSubtitle>
            <Period>August 2018 - July 2021</Period>
          </CardInfo>
        </CardHeaderContainer>
      )
  }
}
