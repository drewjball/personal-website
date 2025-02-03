import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  OPACITY,
  SPACING,
} from "../../constants/theme"

import styled from "styled-components"

interface AlignProps {
  align?: "left" | "center" | "right"
  isHomePage?: boolean
}

export const PageTitle = styled.h1<AlignProps>`
  font-size: ${FONT_SIZES.XXXLARGE};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.SMALL};
  text-align: ${({ align = "center" }) => align};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.XXLARGE};
  }
`

export const PageSubtitle = styled.p<AlignProps>`
  font-size: ${FONT_SIZES.MEDIUM};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.XXLARGE};
  text-align: ${({ align = "center" }) => align};
  opacity: ${OPACITY.MEDIUM};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.BASE};
    margin-bottom: ${SPACING.LARGE};
  }
`

export const Section = styled.section<{ secondary?: boolean }>`
  padding: ${SPACING.XLARGE} ${SPACING.LARGE};
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.secondary : theme.background};
`

export const SectionTitle = styled.h3<AlignProps>`
  font-size: ${FONT_SIZES.XLARGE};
  color: ${({ theme }) => theme.primary};
  margin: ${({ isHomePage }) => (isHomePage ? "0" : SPACING.LARGE)} 0
    ${SPACING.XLARGE};
  display: flex;
  align-items: center;
  gap: ${SPACING.SMALL};
  justify-content: ${({ align = "left" }) =>
    align === "center"
      ? "center"
      : align === "right"
      ? "flex-end"
      : "flex-start"};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.LARGE};
  }

  svg {
    color: ${({ theme }) => theme.accent};
  }
`

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${BORDER_RADIUS.MEDIUM};
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardInfo = styled.div`
  flex: 1;
`

export const CardTitle = styled.h3`
  font-size: ${FONT_SIZES.LARGE};
  color: ${({ theme }) => theme.primary};
  margin-bottom: ${SPACING.XXSMALL};
`

export const CardSubtitle = styled.h4`
  font-size: ${FONT_SIZES.MEDIUM};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.XXSMALL};
`

export const Period = styled.span`
  font-size: ${FONT_SIZES.SMALL};
  color: ${({ theme }) => theme.text};
  opacity: ${OPACITY.MEDIUM};
`

export const Description = styled.p`
  font-size: ${FONT_SIZES.BASE};
  line-height: ${LINE_HEIGHTS.BASE};
  color: ${({ theme }) => theme.text};
  margin-top: ${SPACING.MEDIUM};
  opacity: ${OPACITY.HIGH};
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.LARGE};
  max-width: ${BREAKPOINTS.TABLET};
  margin: 0 auto;
`
