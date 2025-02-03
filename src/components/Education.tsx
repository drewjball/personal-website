import {
  CardSubtitle as Degree,
  Description,
  Grid,
  Period,
  CardTitle as School,
  CardInfo as SchoolInfo,
  Logo as SchoolLogo,
  Section,
  SectionTitle,
} from "./shared/SharedStyles"
import { FONT_SIZES, LINE_HEIGHTS, OPACITY, SPACING } from "../constants/theme"
import { FiBook, FiCheck } from "react-icons/fi"

import { CollapsibleCard } from "./shared/CollapsibleCard"
import asuLogo from "../assets/asu-logo.jpg"
import styled from "styled-components"
import { useState } from "react"

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${SPACING.MEDIUM};

  li {
    color: ${({ theme }) => theme.text};
    opacity: ${OPACITY.HIGH};
    margin-bottom: ${SPACING.SMALL};
    font-size: ${FONT_SIZES.BASE};
    line-height: ${LINE_HEIGHTS.BASE};
    display: flex;
    align-items: center;
    gap: ${SPACING.SMALL};

    svg {
      color: ${({ theme }) => theme.accent};
      font-size: ${FONT_SIZES.SMALL};
    }
  }
`

export function Education() {
  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean
  }>({})

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <Section secondary>
      <SectionTitle align="center" isHomePage={true}>
        <FiBook /> Education
      </SectionTitle>
      <Grid>
        <CollapsibleCard
          id="asu"
          isExpanded={expandedCards["asu"]}
          onToggle={toggleCard}
          header={
            <div
              style={{
                display: "flex",
                gap: SPACING.MEDIUM,
                alignItems: "center",
              }}
            >
              <SchoolLogo>
                <img src={asuLogo} alt="Arizona State University logo" />
              </SchoolLogo>
              <SchoolInfo>
                <School>Arizona State University</School>
                <Degree>Bachelor of Arts in Business Technology</Degree>
                <Period>August 2018 - July 2021</Period>
              </SchoolInfo>
            </div>
          }
        >
          <Description>W. P. Carey School of Business - Tempe, AZ</Description>
          <Achievements>
            <li>
              <FiCheck />
              Summa Cum Laude
            </li>
            <li>
              <FiCheck />
              GPA: 3.92
            </li>
            <li>
              <FiCheck />
              Awards for outstanding achievement in web development and digital
              publishing
            </li>
            <li>
              <FiCheck />
              Certifications in HTML5, CSS, Bootstrap, and JS
            </li>
          </Achievements>
        </CollapsibleCard>
      </Grid>
    </Section>
  )
}
