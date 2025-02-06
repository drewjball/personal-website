import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZES,
  OPACITY,
  SHADOWS,
  SPACING,
  TRANSITIONS,
} from "../../constants/theme"

import { FiChevronDown } from "react-icons/fi"
import styled from "styled-components"

const CardWrapper = styled.div<{ $secondary?: boolean }>`
  padding: ${SPACING.LARGE};
  background-color: ${({ theme, $secondary }) =>
    $secondary ? theme.secondary : theme.background};
  border-radius: ${BORDER_RADIUS.LARGE};
  box-shadow: ${SHADOWS.MEDIUM};
  transition: ${TRANSITIONS.TRANSFORM};

  &:hover {
    transform: translateY(-5px);
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACING.MEDIUM};
  margin-bottom: ${SPACING.SMALL};
  justify-content: space-between;

  @media (max-width: ${BREAKPOINTS.INTERMEDIATE}) {
    flex-direction: column;
    margin-bottom: 0;
  }
`

const ExpandButton = styled.button<{ $isExpanded: boolean }>`
  background: none;
  border: none;
  color: ${({ theme }) => theme.accent};
  font-size: ${FONT_SIZES.XLARGE};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  transition: ${TRANSITIONS.DEFAULT};

  &:hover {
    opacity: ${OPACITY.MEDIUM};
  }
`

const ChevronIcon = styled(FiChevronDown)<{ $isExpanded: boolean }>`
  transform: rotate(${({ $isExpanded }) => ($isExpanded ? "180deg" : "0")});
  transition: ${TRANSITIONS.DEFAULT};
`

const Content = styled.div<{ $isExpanded: boolean }>`
  max-height: ${({ $isExpanded }) => ($isExpanded ? "none" : "0")};
  overflow: hidden;
  opacity: ${({ $isExpanded }) => ($isExpanded ? "1" : "0")};

  p:first-child {
    margin-top: ${SPACING.SMALL};
  }
`

interface CollapsibleCardProps {
  id: string
  isExpanded: boolean
  onToggle: (id: string) => void
  header: React.ReactNode
  description: React.ReactNode
  secondary?: boolean
  ariaLabel?: string
}

export const CollapsibleCard = ({
  id,
  isExpanded,
  onToggle,
  header,
  description,
  secondary,
  ariaLabel,
}: CollapsibleCardProps) => (
  <CardWrapper
    $secondary={secondary}
    role="region"
    aria-labelledby={`${id}-header`}
  >
    <Header id={`${id}-header`}>
      {header}
      <ExpandButton
        onClick={() => onToggle(id)}
        aria-label={ariaLabel || "Toggle section"}
        aria-expanded={isExpanded}
        type="button"
        $isExpanded={isExpanded}
      >
        <ChevronIcon $isExpanded={isExpanded} aria-hidden="true" />
      </ExpandButton>
    </Header>
    <Content $isExpanded={isExpanded}>{description}</Content>
  </CardWrapper>
)
