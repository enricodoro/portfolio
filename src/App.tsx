import { ThemeProvider } from '@emotion/react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Container, Fab, Grow, Stack } from '@mui/material'
import { useRef, useState } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Knowledges from './components/Knowledges'
import Projects from './components/Projects'
import TopBar from './components/TopBar'
import './css/App.css'
import theme from './ThemeOptions'

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const knowledgesRef = useRef(null)
  const [exp, setExp] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  window.addEventListener('scroll', function () {
    if (window.scrollY === 0) {
      setScrolled(false)
    } else {
      setScrolled(true)
    }
  })

  const executeScroll = (myRef: any) => {
    myRef.current.scrollIntoView()
    setExp(false)
  }

  const handleScroll = () => {
    window.scrollTo(0, 0)
  }

  return (
    <ThemeProvider theme={theme}>
      <TopBar
        exScroll={executeScroll}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        knowledgesRef={knowledgesRef}
      />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: '64px !important',
          mx: '0 !important',
          backgroundImage: 'url(https://i.imgur.com/Ve40rFI.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '50%',
          backgroundSize: 'cover',
        }}
      >
        <Stack
          direction="column"
          maxWidth="lg"
          gap={4}
          py="32px"
          alignItems="center"
          justifyContent="center"
          marginX="auto"
        >
          <About aboutRef={aboutRef} />
          <Projects projectsRef={projectsRef} />
          <Knowledges knowledgesRef={knowledgesRef} />
        </Stack>
        <Grow in={scrolled} {...(scrolled ? { timeout: 500 } : {})}>
          <Fab
            onClick={handleScroll}
            sx={{
              zIndex: 10,
              position: 'fixed',
              right: '32px',
              bottom: '32px',
            }}
          >
            <ArrowUpwardIcon />
          </Fab>
        </Grow>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
