import { Description, Grid, Section, SectionTitle } from "./shared/SharedStyles"
import { FONT_SIZES, LINE_HEIGHTS, OPACITY, SPACING } from "../constants/theme"
import { FiBook, FiCheck } from "react-icons/fi"

import { CardHeader } from "./shared/CardHeader"
import { CollapsibleCard } from "./shared/CollapsibleCard"
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
    <Section $secondary>
      <SectionTitle $align="center" $isHomePage={true}>
        <FiBook /> Education
      </SectionTitle>
      <Grid>
        <CollapsibleCard
          id="asu"
          isExpanded={expandedCards["asu"]}
          onToggle={toggleCard}
          header={<CardHeader location="Arizona State University" />}
          description={
            <>
              <Description>
                W. P. Carey School of Business - Tempe, AZ
              </Description>
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
                  Awards for outstanding achievement in web development and
                  digital publishing
                </li>
                <li>
                  <FiCheck />
                  Certifications in HTML5, CSS, Bootstrap, and JavaScript
                </li>
              </Achievements>
            </>
          }
        />
      </Grid>
    </Section>
  )
}
