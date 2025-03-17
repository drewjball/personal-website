import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  SHADOWS,
  SPACING,
  TRANSITIONS,
} from "../constants/theme"
import { FiCheck, FiTool } from "react-icons/fi"
import { Section, SectionTitle } from "./shared/SharedStyles"

import { memo } from "react"
import styled from "styled-components"
import { useState } from "react"

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${SPACING.MEDIUM};
  max-width: ${BREAKPOINTS.DESKTOP};
  margin: 0 auto;
  padding: 0 ${SPACING.MEDIUM};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 ${SPACING.SMALL};
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: 0;
  }
`

const SkillCategory = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: ${BORDER_RADIUS.LARGE};
  padding: ${SPACING.LARGE};
  box-shadow: ${SHADOWS.MEDIUM};
  transition: ${TRANSITIONS.TRANSFORM};

  &:hover {
    transform: translateY(-5px);
  }
`

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: ${FONT_SIZES.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
  font-weight: ${FONT_WEIGHTS.REGULAR};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.MEDIUM};
  }
`

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 200px));
  gap: ${SPACING.SMALL};
  justify-content: center;

  @media (max-width: ${BREAKPOINTS.SMALLMOBILE}) {
    grid-template-columns: 1fr;
  }
`

const CardContent = styled.div<{ $isExpanded: boolean }>`
  @media (max-width: ${BREAKPOINTS.SMALLMOBILE}) {
    & > ul {
      max-height: ${({ $isExpanded }) => ($isExpanded ? "none" : "160px")};
      overflow: hidden;
      position: relative;

      ${({ $isExpanded, theme }) =>
        !$isExpanded &&
        `
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50px;
          background: linear-gradient(transparent, ${theme.glass});
        }
      `}
    }
  }
`

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.accent};
  font-size: ${FONT_SIZES.BASE};
  padding: ${SPACING.XXSMALL} 0;
  cursor: pointer;
  display: none;

  @media (max-width: ${BREAKPOINTS.SMALLMOBILE}) {
    display: block;
  }
`

const SkillItem = styled.li`
  color: ${({ theme }) => theme.text};
  font-size: ${FONT_SIZES.SMALL};
  display: flex;
  align-items: flex-start;
  gap: ${SPACING.SMALL};

  svg {
    color: ${({ theme }) => theme.accent};
    font-size: ${FONT_SIZES.SMALL};
    flex-shrink: 0;
    margin-top: 5px;
  }
`

const SkillCategoryWrapper = memo(
  ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
      <SkillCategory>
        <CategoryTitle>{title}</CategoryTitle>
        <CardContent $isExpanded={isExpanded}>{children}</CardContent>
        <ReadMoreButton onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? "Read Less" : "Read More..."}
        </ReadMoreButton>
      </SkillCategory>
    )
  }
)

export function Skills() {
  return (
    <Section $secondary>
      <SectionTitle $align="center" $isHomePage={true}>
        <FiTool /> Technical Expertise
      </SectionTitle>
      <SkillsGrid>
        <SkillCategoryWrapper title="Frontend Development">
          <SkillsList>
            <SkillItem>
              <FiCheck />
              React
            </SkillItem>
            <SkillItem>
              <FiCheck />
              TypeScript
            </SkillItem>
            <SkillItem>
              <FiCheck />
              JavaScript
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Next.js
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Vite
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Redux
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Zustand
            </SkillItem>
            <SkillItem>
              <FiCheck />
              HTML/CSS
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Styled Components
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Tailwind CSS
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Material UI
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Chakra UI
            </SkillItem>
          </SkillsList>
        </SkillCategoryWrapper>

        <SkillCategoryWrapper title="Backend & Infrastructure">
          <SkillsList>
            <SkillItem>
              <FiCheck />
              C#
            </SkillItem>
            <SkillItem>
              <FiCheck />
              ASP.NET
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Node.js
            </SkillItem>
            <SkillItem>
              <FiCheck />
              PostgreSQL
            </SkillItem>
            <SkillItem>
              <FiCheck />
              GraphQL
            </SkillItem>
            <SkillItem>
              <FiCheck />
              REST APIs
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Docker
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Podman
            </SkillItem>
            <SkillItem>
              <FiCheck />
              {`Linux (Ubuntu)`}
            </SkillItem>
            <SkillItem>
              <FiCheck />
              WSL
            </SkillItem>
          </SkillsList>
        </SkillCategoryWrapper>

        <SkillCategoryWrapper title="Professional Skills">
          <SkillsList>
            <SkillItem>
              <FiCheck />
              Agile/Scrum
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Leadership
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Code Review
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Mentoring
            </SkillItem>
            <SkillItem>
              <FiCheck />
              System Design
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Git
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Unit Testing
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Performance
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Accessibility
            </SkillItem>
          </SkillsList>
        </SkillCategoryWrapper>
      </SkillsGrid>
    </Section>
  )
}
