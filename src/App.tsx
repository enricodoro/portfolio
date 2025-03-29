import { ThemeProvider } from '@emotion/react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Container, Fab, Grow, Stack } from '@mui/material';
import { useRef, useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Knowledges from './components/Knowledges';
import Projects from './components/Projects';
import Timeline from './components/Timeline/Timeline';
import TopBar from './components/TopBar';
import './css/App.css';
import theme from './ThemeOptions';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const knowledgesRef = useRef(null);
  const timelineRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener('scroll', function () {
    if (window.scrollY === 0) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  });

  const executeScroll = (myRef: any) => {
    myRef.current.scrollIntoView();
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <TopBar
        exScroll={executeScroll}
        aboutRef={aboutRef}
        timelineRef={timelineRef}
        projectsRef={projectsRef}
        knowledgesRef={knowledgesRef}
      />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: '32px !important',
          mx: '0 !important',
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
          <Timeline timelineRef={timelineRef} />
          <Projects projectsRef={projectsRef} />
          <Knowledges knowledgesRef={knowledgesRef} />
        </Stack>
        <Grow in={scrolled} {...(scrolled ? { timeout: 500 } : {})}>
          <Fab
            className="custom-fab"
            onClick={handleScroll}
            sx={{
              zIndex: 10,
              position: 'fixed',
              right: '32px',
              bottom: '32px',
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Grow>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
