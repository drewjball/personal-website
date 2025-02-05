import {
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

export const Description = styled.p`
  font-size: ${FONT_SIZES.SMALL};
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
