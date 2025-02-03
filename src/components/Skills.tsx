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

import styled from "styled-components"

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: ${SPACING.MEDIUM};
  max-width: ${BREAKPOINTS.DESKTOP};
  margin: 0 auto;
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
  font-size: ${FONT_SIZES.LARGE};
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
`

const SkillItem = styled.li`
  color: ${({ theme }) => theme.text};
  font-size: ${FONT_SIZES.SMALL};
  display: flex;
  align-items: center;
  gap: ${SPACING.SMALL};

  svg {
    color: ${({ theme }) => theme.accent};
    font-size: ${FONT_SIZES.SMALL};
  }
`

export function Skills() {
  return (
    <Section secondary>
      <SectionTitle align="center" isHomePage={true}>
        <FiTool /> Technical Expertise
      </SectionTitle>
      <SkillsGrid>
        <SkillCategory>
          <CategoryTitle>Frontend Development</CategoryTitle>
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
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>Backend & Infrastructure</CategoryTitle>
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
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>Professional Skills</CategoryTitle>
          <SkillsList>
            <SkillItem>
              <FiCheck />
              Agile/Scrum
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Team Leadership
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
              Documentation
            </SkillItem>
            <SkillItem>
              <FiCheck />
              Git/GitHub
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
        </SkillCategory>
      </SkillsGrid>
    </Section>
  )
}
