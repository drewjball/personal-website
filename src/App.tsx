import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { darkTheme, lightTheme } from "./theme"

import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import GlobalStyle from "./GlobalStyle"
import { Hero } from "./components/Hero"
import { Navigation } from "./components/Navigation"
import { Skills } from "./components/Skills"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
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
      <Hero />
      <Skills />
      <Experience />
      <Education />
    </>
  )
}

function App() {
  const { isDarkMode } = useThemeStore()

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <AppWrapper>
          <Navigation />
          <MainContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/portfolio"
                element={<div>Portfolio Coming Soon</div>}
              />
              <Route path="/blog" element={<div>Blog Coming Soon</div>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainContainer>
          <Footer />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  )
}

export default App
