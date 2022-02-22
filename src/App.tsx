import { ThemeProvider } from '@emotion/react'
import { Container, Grid } from '@mui/material'
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

  const executeScroll = (myRef: any) => {
    myRef.current.scrollIntoView()
    setExp(false)
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
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <About aboutRef={aboutRef} />
            <Projects projectsRef={projectsRef} />
            <Knowledges knowledgesRef={knowledgesRef} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
