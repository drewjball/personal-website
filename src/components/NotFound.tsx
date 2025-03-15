import { BREAKPOINTS, FONT_SIZES, SPACING } from "../constants/theme"
import { Link, useLocation } from "react-router-dom"
import { PageSubtitle, PageTitle } from "./shared/SharedStyles"

import { SEO } from "./shared/SEO"
import styled from "styled-components"
import { useEffect } from "react"

const NotFoundSection = styled.section`
  padding: ${SPACING.XXLARGE} ${SPACING.LARGE};
  text-align: center;
  max-width: ${BREAKPOINTS.DESKTOP};
  margin: 0 auto;
`

const HomeLink = styled(Link)`
  display: inline-block;
  margin-top: ${SPACING.LARGE};
  color: ${({ theme }) => theme.accent};
  font-size: ${FONT_SIZES.MEDIUM};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

interface NotFoundProps {
  onMount?: () => void
}

export function NotFound({ onMount }: NotFoundProps) {
  const location = useLocation()

  useEffect(() => {
    // Set status code in development
    if (import.meta.env.DEV) {
      const statusCode = document.createElement("meta")
      statusCode.setAttribute("http-equiv", "status")
      statusCode.setAttribute("content", "404")
      document.head.appendChild(statusCode)
    }

    onMount?.()
  }, [onMount])

  return (
    <>
      <SEO
        title="404 - Page Not Found | Drew Ball"
        description="The page you're looking for doesn't exist. Return to Drew Ball's website homepage."
        path={location.pathname}
      />
      <NotFoundSection>
        <PageTitle>404</PageTitle>
        <PageSubtitle>
          Oops! The page you're looking for doesn't exist.
        </PageSubtitle>
        <HomeLink to="/">← Return to Homepage</HomeLink>
      </NotFoundSection>
    </>
  )
}
