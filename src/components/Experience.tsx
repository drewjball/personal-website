import { Description, Grid, Section, SectionTitle } from "./shared/SharedStyles"

import { CardHeader } from "./shared/CardHeader"
import { CollapsibleCard } from "./shared/CollapsibleCard"
import { FiBriefcase } from "react-icons/fi"
import { useState } from "react"

export function Experience() {
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
    <Section>
      <SectionTitle align="center" isHomePage={true}>
        <FiBriefcase /> Professional Experience
      </SectionTitle>
      <Grid>
        <CollapsibleCard
          id="booz"
          isExpanded={expandedCards["booz"]}
          onToggle={toggleCard}
          header={<CardHeader location="Booz Allen Hamilton" />}
          description={
            <Description>
              Leading development of secure government platforms with public
              trust clearance. Spearheading end-to-end development using React,
              TypeScript, and .NET, while implementing robust testing with
              Vitest. Architecting scalable UI components and maintaining
              backend services with PostgreSQL integration. Leveraging
              containerization with Docker/Podman in Linux environments and
              collaborating closely with UI/UX teams to deliver pixel-perfect
              interfaces.
            </Description>
          }
          secondary
        ></CollapsibleCard>

        <CollapsibleCard
          id="issa"
          isExpanded={expandedCards["issa"]}
          onToggle={toggleCard}
          header={
            <CardHeader location="International Sports Sciences Association" />
          }
          description={
            <>
              <Description>
                Engineered scalable user interfaces for multiple ecommerce
                platforms using React and TypeScript. Enhanced website
                performance through dynamic component development and headless
                CMS integration. Implemented analytics tracking and SEO
                improvements while leading bi-weekly deployments. Mentored
                offshore developers and maintained high code quality through
                detailed reviews.
              </Description>
              <Description>
                Previously drove frontend improvements using React and Next.js
                while managing content migration in Contentful CMS. Collaborated
                with senior developers on feature enhancements and created
                custom media assets using Adobe Creative Suite.
              </Description>
            </>
          }
          secondary
        />

        <CollapsibleCard
          id="silverback"
          isExpanded={expandedCards["silverback"]}
          onToggle={toggleCard}
          header={<CardHeader location="Silverback Marketing" />}
          description={
            <Description>
              Optimized web presence through competitive keyword research and
              organic search analysis. Developed responsive page designs using
              modern web technologies while implementing technical SEO best
              practices and core web vitals optimization.
            </Description>
          }
          secondary
        />
      </Grid>
    </Section>
  )
}
