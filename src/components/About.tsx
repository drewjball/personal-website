import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  OPACITY,
  SHADOWS,
  SPACING,
  TRANSITIONS,
  Z_INDEX,
} from "../constants/theme"
import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiMessageSquare,
  FiTarget,
  FiTrendingUp,
  FiUserPlus,
  FiZap,
} from "react-icons/fi"
import { PageSubtitle, PageTitle, SectionTitle } from "./shared/SharedStyles"
import { memo, useCallback, useState } from "react"

import styled from "styled-components"
import { useThemeStore } from "../store/themeStore"

const AboutSection = styled.section`
  padding: ${SPACING.XXLARGE} ${SPACING.LARGE};
  background-color: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
  contain: content;
  will-change: transform;
`

const ContentWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  position: relative;
  z-index: ${Z_INDEX.BASE};
  contain: content;
  will-change: transform;
`

const BackgroundDecoration = styled.div<{ isDarkMode: boolean }>`
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 200%;
  background: ${({ theme }) => theme.secondary};
  transform: rotate(-35deg);
  z-index: ${Z_INDEX.BACKGROUND};
  opacity: ${({ isDarkMode }) => (isDarkMode ? 0.5 : 1.5)};
`

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.accent};
  font-size: ${FONT_SIZES.BASE};
  padding: ${SPACING.XXSMALL} 0;
  cursor: pointer;
  display: none;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    display: block;
  }
`

const CardContent = styled.div<{ isExpanded: boolean }>`
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    max-height: ${({ isExpanded }) => (isExpanded ? "none" : "150px")};
    overflow: hidden;
    position: relative;

    ${({ isExpanded, theme }) =>
      !isExpanded &&
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
`

const HighlightCard = styled.div<{ isExpanded?: boolean }>`
  background: ${({ theme }) => theme.glass};
  border-radius: ${BORDER_RADIUS.LARGE};
  padding: ${SPACING.LARGE};
  margin: ${SPACING.LARGE} 0;
  box-shadow: ${SHADOWS.MEDIUM};
  transition: ${TRANSITIONS.TRANSFORM};
  border: 1px solid ${({ theme }) => theme.border};
  contain: content;
  will-change: transform;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding: ${SPACING.MEDIUM};
  }
`

const Paragraph = styled.p`
  font-size: ${FONT_SIZES.SMALL};
  line-height: ${LINE_HEIGHTS.LARGE};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.MEDIUM};
  opacity: ${OPACITY.HIGH};
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${SPACING.SMALL} 0;

  li {
    color: ${({ theme }) => theme.text};
    font-size: ${FONT_SIZES.SMALL};
    line-height: ${LINE_HEIGHTS.LARGE};
    margin-bottom: ${SPACING.SMALL};
    opacity: ${OPACITY.HIGH};
    padding-left: ${SPACING.MEDIUM};
    position: relative;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.accent};
    }

    strong {
      color: ${({ theme }) => theme.text};
      font-weight: ${FONT_WEIGHTS.MEDIUM};
    }
  }

  &.numbered {
    li:before {
      content: none;
    }
    li {
      padding-left: 0;
    }
  }
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  transition: ${TRANSITIONS.DEFAULT};

  &:hover,
  &:visited {
    color: ${({ theme }) => theme.accent};
    opacity: ${OPACITY.MEDIUM};
  }
`

interface HighlightCardSectionProps {
  title: string
  id: string
  icon: React.ComponentType<{ size?: number }>
  children: React.ReactNode
  isExpanded: boolean
}

const HighlightCardSection = memo(
  ({
    title,
    id,
    icon: Icon,
    children,
    isExpanded,
  }: HighlightCardSectionProps) => (
    <>
      <SectionTitle>
        <Icon /> {title}
      </SectionTitle>
      <HighlightCard id={id} isExpanded={isExpanded}>
        {children}
      </HighlightCard>
    </>
  )
)

export function About() {
  const { isDarkMode } = useThemeStore()
  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean
  }>({})

  const toggleCard = useCallback((id: string) => {
    const card = document.getElementById(id)

    // Get the section's top position relative to viewport
    const sectionTop = card?.offsetTop || 0

    // Toggle the state
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))

    // Scroll to the top of the section
    window.scrollTo({
      top: sectionTop - 100, // Subtract some pixels to account for padding/margin
      behavior: "smooth",
    })
  }, [])

  return (
    <AboutSection>
      <BackgroundDecoration isDarkMode={isDarkMode} />
      <ContentWrapper>
        <PageTitle>About Me</PageTitle>
        <PageSubtitle>
          A journey from business student to senior software engineer
        </PageSubtitle>

        <HighlightCardSection
          title="From Curiosity to Code"
          id="curiosity"
          icon={FiCode}
          isExpanded={expandedCards["curiosity"]}
        >
          <CardContent isExpanded={expandedCards["curiosity"]}>
            <Paragraph>
              My journey into technology started at a young age. Growing up, I
              was always surrounded by it—my dad, an SEO specialist, ran his own
              agency, and I naturally became immersed in the digital world. When
              it came time to choose a path in college, I pursued Business
              Technology at Arizona State University, believing I had a solid
              grasp of tech but wanted to understand its application in
              business.
            </Paragraph>
            <Paragraph>
              Everything changed when I took a software engineering elective.
              Writing my first lines of HTML and CSS and seeing them render in a
              browser ignited something in me. That curiosity quickly turned
              into an obsession—I spent late nights diving into JavaScript,
              React, databases, and full-stack development. What started as a
              simple class became a defining moment in my career, leading me to
              where I am today: a Senior Software Engineer building applications
              across the entire stack.
            </Paragraph>
          </CardContent>
          <ReadMoreButton onClick={() => toggleCard("curiosity")}>
            {expandedCards["curiosity"] ? "Read Less" : "Read More..."}
          </ReadMoreButton>
        </HighlightCardSection>

        <HighlightCardSection
          title="What I Do"
          id="whatIDo"
          icon={FiCpu}
          isExpanded={expandedCards["whatIDo"]}
        >
          <CardContent isExpanded={expandedCards["whatIDo"]}>
            <Paragraph>
              Whether it's freelance websites, ecommerce platforms, or
              large-scale government applications, I take pride in writing
              clean, maintainable code that makes an impact:
            </Paragraph>
            <Paragraph>
              I specialize in React and TypeScript, leveraging my expertise to
              create scalable, high-performance applications. My frontend
              knowledge extends beyond just coding—I focus on user experience,
              accessibility, and performance optimization to ensure that the
              products I build are not only functional but also intuitive and
              efficient.
            </Paragraph>
            <Paragraph>
              On the backend, I work extensively with ASP.NET (C#), PostgreSQL,
              and containerized environments (WSL, Podman), allowing me to build
              and manage complex systems that power enterprise applications.
            </Paragraph>
          </CardContent>
          <ReadMoreButton onClick={() => toggleCard("whatIDo")}>
            {expandedCards["whatIDo"] ? "Read Less" : "Read More..."}
          </ReadMoreButton>
        </HighlightCardSection>

        <HighlightCardSection
          title="My Problem-Solving Philosophy"
          id="problemSolving"
          icon={FiBookOpen}
          isExpanded={expandedCards["problemSolving"]}
        >
          <CardContent isExpanded={expandedCards["problemSolving"]}>
            <Paragraph>
              Rather than getting lost in complexity, I approach each challenge
              with a structured methodology:
            </Paragraph>
            <Paragraph>
              I approach engineering like a well-structured book—each problem is
              a chapter that needs a clear beginning, middle, and end. Rather
              than getting lost in complexity, I break problems down into
              structured outlines, ensuring that I stay focused and efficient.
              This method allows me to work through challenges logically while
              also providing clear estimations for stakeholders.
            </Paragraph>
          </CardContent>
          <ReadMoreButton onClick={() => toggleCard("problemSolving")}>
            {expandedCards["problemSolving"] ? "Read Less" : "Read More..."}
          </ReadMoreButton>
        </HighlightCardSection>

        <HighlightCardSection
          title="Industries & Impact"
          id="industries"
          icon={FiTarget}
          isExpanded={expandedCards["industries"]}
        >
          <CardContent isExpanded={expandedCards["industries"]}>
            <Paragraph>
              I've had the opportunity to work on a diverse range of projects,
              from small business websites to enterprise-level government
              platforms. My most meaningful contributions have been in:
            </Paragraph>
            <List>
              <li>
                <strong>Ecommerce & SEO</strong>: Helping businesses scale
                through improved page speed, SEO rankings, lead generation, and
                conversion optimization.
              </li>
              <li>
                <strong>Enterprise Solutions</strong>: Developing large-scale
                platforms for government health services, empowering scientists,
                geneticists, and researchers with tools to combat global health
                crises.
              </li>
              <li>
                <strong>Small Business Growth</strong>: Providing digital
                transformation strategies for mom-and-pop businesses that
                previously lacked an online presence.
              </li>
            </List>
          </CardContent>
          <ReadMoreButton onClick={() => toggleCard("industries")}>
            {expandedCards["industries"] ? "Read Less" : "Read More..."}
          </ReadMoreButton>
        </HighlightCardSection>

        <HighlightCardSection
          title="Vision & Goals"
          id="vision"
          icon={FiTrendingUp}
          isExpanded={expandedCards["vision"]}
        >
          <CardContent isExpanded={expandedCards["vision"]}>
            <Paragraph>
              I'm always looking ahead. My short-term goal is to become a
              well-rounded full-stack engineer with expertise across frontend,
              backend, and DevOps. Long term, I see myself taking one of the
              following paths:
            </Paragraph>
            <List>
              <li>
                Launching my own SaaS product or consulting agency—leveraging my
                skills to build something from the ground up.
              </li>
              <li>
                Stepping into tech leadership, whether as a CTO or department
                head, helping shape the future of engineering teams.
              </li>
            </List>
          </CardContent>
          <ReadMoreButton onClick={() => toggleCard("vision")}>
            {expandedCards["vision"] ? "Read Less" : "Read More..."}
          </ReadMoreButton>
        </HighlightCardSection>

        <HighlightCardSection
          title="Why AI is a Game-Changer"
          id="ai"
          icon={FiZap}
          isExpanded={expandedCards["ai"]}
        >
          <CardContent isExpanded={expandedCards["ai"]}>
            <Paragraph>
              The landscape of software development is rapidly evolving, and AI
              is at the forefront of this transformation:
            </Paragraph>
            <Paragraph>
              I firmly believe that AI is reshaping software development—not
              replacing engineers, but enhancing productivity and accelerating
              innovation. I use AI daily for research, debugging, and automating
              repetitive tasks, and I'm excited to see how these tools will
              continue to evolve. The barrier to entry in tech has never been
              lower, and I welcome the wave of innovation that AI is bringing to
              the industry.
            </Paragraph>
          </CardContent>
          <ReadMoreButton onClick={() => toggleCard("ai")}>
            {expandedCards["ai"] ? "Read Less" : "Read More..."}
          </ReadMoreButton>
        </HighlightCardSection>

        <HighlightCardSection
          title="Beyond the Screen"
          id="beyondScreen"
          icon={FiUserPlus}
          isExpanded={expandedCards["beyondScreen"]}
        >
          <CardContent isExpanded={expandedCards["beyondScreen"]}>
            <Paragraph>When I'm not coding, I'm probably:</Paragraph>
            <List>
              <li>
                Spending time with my wife, Amy, and our two dogs, Donnie and
                Rocco (my unofficial pair-programming partners)
              </li>
              <li>
                Watching Philadelphia sports—I've been a die-hard Eagles fan
                since birth. Go Birds!
              </li>
              <li>Training in my home gym, one of my best investments yet</li>
            </List>
          </CardContent>
          <ReadMoreButton onClick={() => toggleCard("beyondScreen")}>
            {expandedCards["beyondScreen"] ? "Read Less" : "Read More..."}
          </ReadMoreButton>
        </HighlightCardSection>

        <HighlightCardSection
          title="Let's Connect"
          id="connect"
          icon={FiMessageSquare}
          isExpanded={expandedCards["connect"]}
        >
          <CardContent isExpanded={true}>
            <Paragraph>
              If you're interested in working together, discussing tech, or just
              talking football—feel free to{" "}
              <StyledLink href="/contact">reach out</StyledLink>!
            </Paragraph>
          </CardContent>
          <ReadMoreButton
            onClick={() => toggleCard("connect")}
          ></ReadMoreButton>
        </HighlightCardSection>
      </ContentWrapper>
    </AboutSection>
  )
}
