import {
  CardInfo,
  CardTitle as Company,
  Logo as CompanyLogo,
  Description,
  Grid,
  Period,
  CardSubtitle as Role,
  Section,
  SectionTitle,
} from "./shared/SharedStyles"

import { CollapsibleCard } from "./shared/CollapsibleCard"
import { FiBriefcase } from "react-icons/fi"
import { SPACING } from "../constants/theme"
import boozAllenLogo from "../assets/booz-allen-logo.webp"
import issaLogo from "../assets/issa-logo.png"
import silverbackLogo from "../assets/silverback-marketing-logo.webp"
import styled from "styled-components"
import { useState } from "react"

const RoleGroup = styled.div`
  margin-bottom: ${SPACING.SMALL};
`

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
          header={
            <div
              style={{
                display: "flex",
                gap: SPACING.MEDIUM,
                alignItems: "center",
              }}
            >
              <CompanyLogo>
                <img src={boozAllenLogo} alt="Booz Allen Hamilton logo" />
              </CompanyLogo>
              <CardInfo>
                <Company>Booz Allen Hamilton</Company>
                <Role>Senior Consultant – Staff Engineer</Role>
                <Period>April 2024 – Present</Period>
              </CardInfo>
            </div>
          }
          secondary
        >
          <Description>
            Leading development of secure government platforms with public trust
            clearance. Spearheading end-to-end development using React,
            TypeScript, and .NET, while implementing robust testing with Vitest.
            Architecting scalable UI components and maintaining backend services
            with PostgreSQL integration. Leveraging containerization with
            Docker/Podman in Linux environments and collaborating closely with
            UI/UX teams to deliver pixel-perfect interfaces.
          </Description>
        </CollapsibleCard>

        <CollapsibleCard
          id="issa"
          isExpanded={expandedCards["issa"]}
          onToggle={toggleCard}
          header={
            <div
              style={{
                display: "flex",
                gap: SPACING.MEDIUM,
                alignItems: "center",
              }}
            >
              <CompanyLogo>
                <img src={issaLogo} alt="ISSA logo" />
              </CompanyLogo>
              <CardInfo>
                <Company>International Sports Sciences Association</Company>
                <RoleGroup>
                  <Role>Front End Engineer I</Role>
                  <Period>April 2022 – April 2024</Period>
                </RoleGroup>
                <RoleGroup>
                  <Role>Front End Engineer / Page Builder</Role>
                  <Period>September 2021 – April 2022</Period>
                </RoleGroup>
              </CardInfo>
            </div>
          }
          secondary
        >
          <Description>
            Engineered scalable user interfaces for multiple ecommerce platforms
            using React and TypeScript. Enhanced website performance through
            dynamic component development and headless CMS integration.
            Implemented analytics tracking and SEO improvements while leading
            bi-weekly deployments. Mentored offshore developers and maintained
            high code quality through detailed reviews.
          </Description>
          <Description>
            Previously drove frontend improvements using React and Next.js while
            managing content migration in Contentful CMS. Collaborated with
            senior developers on feature enhancements and created custom media
            assets using Adobe Creative Suite.
          </Description>
        </CollapsibleCard>

        <CollapsibleCard
          id="silverback"
          isExpanded={expandedCards["silverback"]}
          onToggle={toggleCard}
          header={
            <div
              style={{
                display: "flex",
                gap: SPACING.MEDIUM,
                alignItems: "center",
              }}
            >
              <CompanyLogo>
                <img src={silverbackLogo} alt="Silverback Marketing logo" />
              </CompanyLogo>
              <CardInfo>
                <Company>Silverback Marketing</Company>
                <Role>Junior SEO Specialist / Web Developer</Role>
                <Period>March 2018 – June 2021</Period>
              </CardInfo>
            </div>
          }
          secondary
        >
          <Description>
            Optimized web presence through competitive keyword research and
            organic search analysis. Developed responsive page designs using
            modern web technologies while implementing technical SEO best
            practices and core web vitals optimization.
          </Description>
        </CollapsibleCard>
      </Grid>
    </Section>
  )
}
