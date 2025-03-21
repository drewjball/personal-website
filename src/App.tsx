import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom"
import { darkTheme, lightTheme } from "./theme"

import { About } from "./components/About"
import { Analytics } from "@vercel/analytics/react"
// import { Blog } from "./components/Blog"
import { Contact } from "./components/Contact"
import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import GlobalStyle from "./GlobalStyle"
import { Hero } from "./components/Hero"
import { Navigation } from "./components/Navigation"
import { NotFound } from "./components/NotFound"
// import { Portfolio } from "./components/Portfolio"
import { SEO } from "./components/shared/SEO"
import { Skills } from "./components/Skills"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { useEffect } from "react"
import { useThemeStore } from "./store/themeStore"

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContainer = styled.main`
  flex: 1;
  width: 100%;
  padding-top: 80px;
`

function HomePage() {
  return (
    <>
      <SEO
        title={`Drew Ball – Senior Software Engineer | Frontend & Full-Stack Development`}
        description={`Senior Software Engineer specializing in modern frontend architectures, full-stack development, and scalable web applications. Crafting high-performance user experiences with React, TypeScript, and cutting-edge technologies.`}
        path="/"
      />
      <Hero />
      <Skills />
      <Experience />
      <Education />
    </>
  )
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

function App() {
  const { isDarkMode } = useThemeStore()

  const handleNotFound = () => {
    // Force 404 status code
    const meta = document.createElement("meta")
    meta.httpEquiv = "status"
    meta.content = "404"
    document.head.appendChild(meta)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <AppWrapper>
          <ScrollToTop />
          <Navigation />
          <MainContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/portfolio" element={<Portfolio />} /> */}
              <Route path="/about" element={<About />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound onMount={handleNotFound} />} />
            </Routes>
          </MainContainer>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  )
}

export default App
